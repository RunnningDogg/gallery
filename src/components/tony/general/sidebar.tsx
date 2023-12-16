"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AlbumIcon, CpuIcon, PenSquare, Table, Table2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useState } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const pathName = usePathname();

  // const router = useRouter();
  return (
    <aside className="flex h-screen  flex-col items-center border-r border-slate-200">
      <div className="flex flex-col space-y-2 border-b px-4 py-4 ">
        <Link
          href="/"
          className=" title-font flex cursor-pointer items-center   font-medium text-gray-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="h-10 w-10 rounded-full bg-indigo-500 p-2 text-white"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">NoteWise</span>
        </Link>
      </div>

      <div className="mt-3 w-full px-4">
        {/* <Button className="w-full">Add Note</Button> */}
        <ul className="mt-6 w-full space-y-3">
          <li>
            <Link
              href="/read"
              className={cn(
                "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100  ",
                {
                  "bg-slate-100 ": pathName === "/read",
                },
              )}
            >
              <AlbumIcon
                className={cn("stroke-1", {
                  "text-indigo-500": pathName === "/read",
                })}
              />

              <span
                className={cn({
                  "bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent":
                    pathName === "/read",
                })}
              >
                Read
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/cards"
              className={cn(
                "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100  ",
                {
                  "bg-slate-100 ": pathName === "/cards",
                },
              )}
            >
              <CpuIcon
                className={cn("stroke-1", {
                  "text-indigo-500": pathName === "/cards",
                })}
              />
              <span
                className={cn({
                  "bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent":
                    pathName === "/cards",
                })}
              >
                Memorise
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/notes"
              className={cn(
                "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100  ",
                {
                  "bg-slate-100": pathName === "/notes",
                },
              )}
            >
              <PenSquare
                className={cn("stroke-1", {
                  "text-indigo-500": pathName === "/notes",
                })}
              />
              <span
                className={cn({
                  "bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent":
                    pathName === "/notes",
                })}
              >
                Add a Note
              </span>
            </Link>
          </li>

          <li>
            <Link
              href="/table"
              className={cn(
                "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100  ",
                {
                  "bg-slate-100": pathName === "/table",
                },
              )}
            >
              <Table2
                className={cn("stroke-1", {
                  "text-indigo-500": pathName === "/table",
                })}
              />
              <span
                className={cn({
                  "bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent":
                    pathName === "/table",
                })}
              >
                Data
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
