import { NextResponse } from "next/server";

export async function GET() {
  const now = new Date();
  const oneHourAgo = new Date(now.getTime() - 60 * 60 * 1000);
  const startTime = oneHourAgo.toISOString();

  const res = await fetch(
    `https://api.degencoinop.com/v1/games/DEGEN_SPIN/coinOps/events?startTime=${startTime}&limit=10`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      next: {
        revalidate: 1,
      },
    }
  );
  const data = await res.json();

  return NextResponse.json({ feed: data?.payload });
}
