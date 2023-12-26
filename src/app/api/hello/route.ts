import { NextResponse } from "next/server";
import prisma from "@/lib/db";
export async function GET(request: Request) {
  // const users = await prisma.user.findMany();
  const cards = await prisma.card.findMany();
  console.log(cards);
  return NextResponse.json(cards);
}
