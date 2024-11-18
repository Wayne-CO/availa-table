import { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } },
) {
  const { slug } = params;
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

  return Response.json({ slug, day, time, partySize });
}
