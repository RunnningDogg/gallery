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
import AibinhaosiChart from "@/components/tony/AibinhaosiChart";
import LineChartDashBoard from "@/components/tony/LineChartDashBoard";
import { DatePickerWithRange } from "@/components/tony/RangeDatePicker";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CandlestickChart } from "lucide-react";

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
    <div className="ml-6 mt-3 overflow-auto">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <div className="flex items-center  space-x-2">
            <DatePickerWithRange />
            <Button>Download</Button>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Subscriptions
              </CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+2350</div>
              <p className="text-xs text-muted-foreground">
                +180.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CandlestickChart className="h-4 w-4 stroke-[1.25px] text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12,234</div>
              <p className="text-xs text-muted-foreground">
                +19% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Now</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+573</div>
              <p className="text-xs text-muted-foreground">
                +201 since last hour
              </p>
            </CardContent>
          </Card>
        </div>

        {/* table */}
        <div className="space-y-4">
          <div className="">
            <Card className="max-w-sm">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Color CheatSheet
                </CardTitle>
                <Palette className="h-4 w-4" />
              </CardHeader>

              <CardContent className="min-w-xl mt-3 flex flex-col space-y-3">
                <div className="flex justify-between border-b pb-1">
                  <span className="bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent">
                    Color
                  </span>
                  <span>Meaning</span>
                  <span>Retention</span>
                </div>
                <div className="flex justify-between">
                  <span className=" font-bold text-rose-300">Red</span>
                  <span>Do Not Remember</span>
                  <span>0-20%</span>
                </div>

                <div className="flex justify-between">
                  <span className=" font-bold text-amber-300">Yellow</span>
                  <span>Barely Remember</span>
                  <span>20%-50%</span>
                </div>

                <div className="flex justify-between">
                  <span className=" font-bold text-sky-300">Blue</span>
                  <span>Mostly Remember</span>
                  <span>50%-70%</span>
                </div>

                <div className="flex justify-between">
                  <span className=" font-bold text-teal-300">Green</span>
                  <span>Remember</span>
                  <span>70%-100%</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <h2 className="text-3xl font-bold tracking-tight">Retention</h2>
          <DataTable data={cards} columns={columns} />
        </div>
      </div>

      {/* chart */}
      {/* <div className="space-y-4 p-8 pt-6">
        <h2 className="text-3xl font-bold tracking-tight">Trend</h2>
        <LineChartDashBoard />
        <AibinhaosiChart />
      </div> */}
    </div>
  );
}
