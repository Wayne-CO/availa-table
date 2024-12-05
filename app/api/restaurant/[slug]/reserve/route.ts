import { NextRequest } from "next/server";
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

  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
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

  return Response.json({ slug, day, time, partySize });
}
