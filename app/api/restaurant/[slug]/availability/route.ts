import { NextRequest } from "next/server";
import { times } from "@/app/data";

export async function GET(
  req: NextRequest,
  // { params }: { params: { slug: string } },
) {
  const searchParams = req.nextUrl.searchParams;
  const day = searchParams.get("day");
  const time = searchParams.get("time");
  const partySize = searchParams.get("partySize");

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

  return Response.json({ searchTimes });
}
