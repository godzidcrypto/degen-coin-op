import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://api.degencointracker.com/v1/game-stats", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  return NextResponse.json({ stats: data });
}
