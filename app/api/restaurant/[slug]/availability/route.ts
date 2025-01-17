import { NextRequest } from "next/server";
import { findAvailableTables } from "@/app/services/restaurant/findAvailableTables";
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

  const availabilities =
    Array.isArray(searchTimesWithTables) &&
    searchTimesWithTables
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

  return Response.json(availabilities);
}
