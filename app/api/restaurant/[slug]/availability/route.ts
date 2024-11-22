import { NextRequest } from "next/server";
import { times } from "@/app/data";
import { prisma } from "@/lib/prisma";

export async function GET(
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

  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return Response.json(
      {
        errorMessage: "Invalid search time provided",
      },
      { status: 400 },
    );
  }

  const bookings = await prisma.booking.findMany({
    where: {
      bookingTime: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      numberOfPeople: true,
      bookingTime: true,
      tables: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.bookingTime.toISOString()] = booking.tables.reduce(
      (obj, table) => {
        return {
          ...obj,
          [table.tableId]: true,
        };
      },
      {},
    );
  });

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
        errorMessage: "No restaurant found",
      },
      { status: 400 },
    );
  }

  const tables = restaurant.Table;

  const searchTimesWithTables = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  // Filters out booked tables
  searchTimesWithTables.forEach((t) => {
    t.tables = t.tables.filter((table) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][table.id]) return false;
      }

      return true;
    });
  });

  const availabilities = searchTimesWithTables
    .map((t) => {
      const sumSeats = t.tables.reduce((sum, table) => {
        return sum + table.seats;
      }, 0);

      return {
        time: t.time,
        available: sumSeats >= parseInt(partySize),
      };
    })
    .filter((availability) => {
      const timeIsAfterOpeningHour =
        new Date(`${day}T${availability.time}`) >=
        new Date(`${day}T${restaurant.openTime}`);

      const timeIsBeforeClosingHour =
        new Date(`${day}T${availability.time}`) <=
        new Date(`${day}T${restaurant.closeTime}`);

      return timeIsAfterOpeningHour && timeIsBeforeClosingHour;
    });

  return Response.json({
    availabilities,
  });
}
