import React from "react";
import path from "path";
type Props = {};
import { promises as fs } from "fs";
import { z } from "zod";
import { cardSchema } from "@/components/tony/table/data/schema";
import { DataTable } from "@/components/tony/table/data-table";
import { columns } from "@/components/tony/table/column";
import { Palette, Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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

  return (
    <div className="ml-2 mt-3">
      <div className="flex items-center justify-center">
        <Alert className="max-w-sm">
          <Palette className="h-4 w-4" />
          <AlertTitle className="">Color CheatSheet</AlertTitle>
          <AlertDescription className="mt-3 flex flex-col space-y-3">
            <div className="  flex justify-between border-b pb-1">
              <span className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent">
                Color
              </span>
              <span>Meaning</span>
            </div>
            <div className="flex justify-between">
              <span className=" font-bold text-rose-300">Red</span>
              <span>Do Not Remember 0-20%</span>
            </div>

            <div className="flex justify-between">
              <span className=" font-bold text-amber-300">Yellow</span>
              <span>Barely Remember 20%-50%</span>
            </div>

            <div className="flex justify-between">
              <span className=" font-bold text-sky-300">Blue</span>
              <span>Mostly Remember 50%-70%</span>
            </div>

            <div className="flex justify-between">
              <span className=" font-bold text-teal-300">Green</span>
              <span>Remember 70%-100%</span>
            </div>
          </AlertDescription>
        </Alert>
      </div>

      <DataTable data={cards} columns={columns} />
    </div>
  );
}
