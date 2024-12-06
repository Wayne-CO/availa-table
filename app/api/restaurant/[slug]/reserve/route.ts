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

  return Response.json({ searchTimeWithTables });
}
