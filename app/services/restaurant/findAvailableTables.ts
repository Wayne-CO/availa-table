import { times } from "@/app/data";
import { prisma } from "@/lib/prisma";
import { RestaurantTablesWithHours } from "@/lib/restaurant";

export async function findAvailableTables({
  time,
  day,
  restaurant,
}: {
  time: string;
  day: string;
  restaurant: RestaurantTablesWithHours;
}) {
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

  return searchTimesWithTables;
}
