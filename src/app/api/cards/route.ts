import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const requestJson = await request.json();

  const pageIndex = requestJson["pageIndex"];
  const pageSize = requestJson["pageSize"];

  return NextResponse.json({
    // name: "gogo",
    id: 10,
    price: 10,
  });
}
