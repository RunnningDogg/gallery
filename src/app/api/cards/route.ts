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
  // const { title, front, back, tags, user_email } = requestJson;

  console.log("post请求的数据：", requestJson);
  const addData = {
    ...requestJson,
    modified_date: new Date(),
  };
  const card = await prisma.card.create({
    data: requestJson,
  });
  return NextResponse.json(card);
}
