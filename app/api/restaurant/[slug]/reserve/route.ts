import { NextRequest } from "next/server";
import { findAvailableTables } from "@/app/services/restaurant/findAvailableTables";
import { prisma } from "@/lib/prisma";

export async function POST(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const searchParams = req.nextUrl.searchParams;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");
  const slug = params.slug;

  if (!day || !time || !partySize) {
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

  return Response.json({ tablesCount, tablesToBooks });
}
