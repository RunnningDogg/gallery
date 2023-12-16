import React from "react";
import path from "path";
type Props = {};
import { promises as fs } from "fs";
import { z } from "zod";
import { cardSchema } from "@/components/tony/table/data/schema";
import { DataTable } from "@/components/tony/table/data-table";
import { columns } from "@/components/tony/table/column";

async function getCards() {
  const data = await fs.readFile(
    path.join(process.cwd(), "/src/components/tony/table/data/cards.json"),
    "utf8",
  );
  const cards = JSON.parse(data);
  return z.array(cardSchema).parse(cards);
}

export default async function TablePage({}: Props) {
  const cards = await getCards();
  // console.log(cards);

  return (
    <div className="ml-2 mt-3">
      <DataTable data={cards} columns={columns} />
    </div>
  );
}
