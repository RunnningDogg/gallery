import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/db";

export async function GET(request: Request) {
  // const users = await prisma.user.findMany();
  const cards = await prisma.card.findMany();
  console.log(cards);
  return NextResponse.json(cards);
}

export async function POST(request: NextRequest) {
  const requestJson = await request.json();
  const { title, front, back, tags, user_email, created_date, type } =
    requestJson;

  switch (type) {
    case "get":
      const cards = await prisma.card.findMany();
      return NextResponse.json(cards);
    case "add":
      const addData = {
        title,
        front,
        back,
        tags,
        user_email,
        created_date,
        // modified_date: new Date(),
      };
      const card = await prisma.card.create({
        data: addData,
      });
      return NextResponse.json(card);
    case "update":
      return NextResponse.json({ status: 0 });
    case "delete":
      return NextResponse.json({ status: 0 });
    default:
      return NextResponse.json({ error: "type error" });
  }
}
