import { NextApiRequest } from "next";
import { findAvailableTables } from "@/app/services/restaurant/findAvailableTables";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextApiRequest,
  { params }: { params: { slug: string } },
) {
  const slug = params.slug;
  const { day, time, partySize } = req.query;
  const {
    bookerEmail,
    bookerPhone,
    bookerFirstName,
    bookerLastName,
    bookerOccasion,
    bookerRequest,
  } = req.body;

  if (
    !day ||
    !time ||
    !partySize ||
    Array.isArray(day) ||
    Array.isArray(time) ||
    Array.isArray(partySize)
  ) {
    return Response.json(
      {
        errorMessage: "Invalid data provided",
      },
      { status: 400 },
    );
  }

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      Table: true,
      openTime: true,
      closeTime: true,
      id: true,
    },
  });

  if (!restaurant) {
    return Response.json(
      {
        errorMessage: "Invalid restaurant provided",
      },
      { status: 400 },
    );
  }

  if (
    new Date(`${day}T${time}`) < new Date(`${day}T${restaurant.openTime}`) ||
    new Date(`${day}T${time}`) > new Date(`${day}T${restaurant.closeTime}`)
  ) {
    return Response.json(
      {
        errorMessage: "Restaurant is not open at that time",
      },
      { status: 400 },
    );
  }

  const searchTimesWithTables = await findAvailableTables({
    day,
    time,
    restaurant,
  });

  if (!searchTimesWithTables) {
    return Response.json(
      {
        errorMessage: "Invalid search times provided",
      },
      { status: 400 },
    );
  }

  const searchTimeWithTables =
    Array.isArray(searchTimesWithTables) &&
    searchTimesWithTables.find((t) => {
      // uses iso strings because comparing Date objects will always be false
      return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
    });

  if (!searchTimeWithTables) {
    return Response.json(
      {
        errorMessage: "No availability, cannot book",
      },
      { status: 400 },
    );
  }

  const tablesCount: { 2: number[]; 4: number[] } = {
    2: [],
    4: [],
  };

  searchTimeWithTables.tables.forEach((table) => {
    if (table.seats === 2) {
      tablesCount[2].push(table.id);
    } else {
      tablesCount[4].push(table.id);
    }
  });

  const tablesToBooks: number[] = [];
  let seatsRemaining = parseInt(partySize);

  while (seatsRemaining > 0) {
    // if there is a 4 seater then take that
    if (seatsRemaining >= 3) {
      if (tablesCount[4].length) {
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      } else {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      }
    } else {
      // if only 2 seats remain
      if (tablesCount[2].length) {
        tablesToBooks.push(tablesCount[2][0]);
        tablesCount[2].shift();
        seatsRemaining = seatsRemaining - 2;
      } else {
        // if no 2 seaters remain then give 4 seater
        tablesToBooks.push(tablesCount[4][0]);
        tablesCount[4].shift();
        seatsRemaining = seatsRemaining - 4;
      }
    }
  }

  const booking = await prisma.booking.create({
    data: {
      numberOfPeople: parseInt(partySize),
      bookingTime: new Date(`${day}T${time}`),
      bookerEmail: bookerEmail,
      bookerPhone: bookerPhone,
      bookerFirstName: bookerFirstName,
      bookerLastName: bookerLastName,
      bookerOccasion: bookerOccasion,
      bookerRequest: bookerRequest,
      restaurantId: restaurant.id,
    },
  });

  const bookingsOnTablesData = tablesToBooks.map((tableId) => {
    return {
      tableId,
      bookingId: booking.id,
    };
  });

  await prisma.bookingsOnTables.createMany({
    data: bookingsOnTablesData,
  });

  return Response.json({ tablesCount, tablesToBooks });
}
