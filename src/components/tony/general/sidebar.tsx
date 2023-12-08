"use client";
import { Button } from "@/components/ui/button";
import {
  AlbumIcon,
  ArrowLeftToLine,
  ArrowLeftToLineIcon,
  ArrowRightLeftIcon,
  CpuIcon,
  Table,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="flex h-screen  flex-col items-center space-y-8 border-r border-slate-200   py-8 px-6 ">
      <Link
        href="#"
        className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl">NoteWise</span>
      </Link>
      <ul className="w-full space-y-3">
        <li>
          <Link
            href="#"
            className="flex gap-1 cursor-pointer p-2 hover:bg-slate-100 hover:text-violet-500 rounded transition-colors duration-150"
          >
            <AlbumIcon className="stroke-1" />
            <span>Read</span>
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="flex gap-1 cursor-pointer p-2 hover:bg-slate-100 hover:text-violet-500 rounded transition-colors duration-150"
          >
            <CpuIcon className="stroke-1" />
            <span>Memorise</span>
          </Link>
        </li>

        <li>
          <Link
            href="#"
            className="flex gap-1 cursor-pointer p-2 hover:bg-slate-100 hover:text-violet-500 rounded transition-colors duration-150"
          >
            <Table className="stroke-1" />
            <span>Data</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}
