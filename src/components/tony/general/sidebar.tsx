"use client";
import { cn } from "@/lib/utils";
import { AlbumIcon, CpuIcon, Table } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const pathName = usePathname();

  return (
    <aside className="flex h-screen  flex-col items-center space-y-8 border-r border-slate-200   px-6 py-8 ">
      <Link
        href="/"
        className=" title-font mb-4 flex cursor-pointer items-center font-medium text-gray-900 md:mb-0"
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
      <ul className="w-full space-y-3">
        <li>
          <Link
            href="/read"
            className={cn(
              "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100 hover:text-violet-500",
              {
                "bg-slate-100 text-violet-500": pathName === "/read",
              },
            )}
          >
            <AlbumIcon className="stroke-1" />
            <span>Read</span>
          </Link>
        </li>

        <li>
          <Link
            href="/cards"
            className={cn(
              "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100 hover:text-violet-500",
              {
                "bg-slate-100 text-violet-500": pathName === "/cards",
              },
            )}
          >
            <CpuIcon className="stroke-1" />
            <span>Memorise</span>
          </Link>
        </li>

        <li>
          <Link
            href="/datas"
            className={cn(
              "flex cursor-pointer gap-1 rounded p-2 transition-colors duration-150 hover:bg-slate-100 hover:text-violet-500",
              {
                "bg-slate-100 text-violet-500": pathName === "/datas",
              },
            )}
          >
            <Table className="stroke-1" />
            <span>Datas</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
