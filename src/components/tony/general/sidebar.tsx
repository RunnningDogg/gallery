"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
  AlbumIcon,
  ArrowLeftFromLine,
  CpuIcon,
  MenuIcon,
  PenSquare,
  Table,
  Table2,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

type Props = {};

export default function Sidebar({}: Props) {
  const pathName = usePathname();

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // sidebar items
  const sidebarNavItems = [
    {
      title: "Read",
      icon: (
        <AlbumIcon
          className={cn("stroke-1", {
            " rounded bg-slate-100 text-indigo-500": pathName === "/read",
            "h-[40px] w-[40px] p-2 hover:rounded hover:bg-slate-100  hover:text-indigo-500":
              !isSidebarOpen,
          })}
        />
      ),
      href: "/read",
    },
    {
      title: "Memorise",
      icon: (
        <CpuIcon
          className={cn("stroke-1", {
            "rounded bg-slate-100 text-indigo-500": pathName === "/cards",
            "h-[40px] w-[40px] p-2 hover:rounded hover:bg-slate-100  hover:text-indigo-500":
              !isSidebarOpen,
          })}
        />
      ),
      href: "/cards",
    },
    {
      title: "Add a Note",
      icon: (
        <PenSquare
          className={cn("stroke-1", {
            "rounded bg-slate-100 text-indigo-500": pathName === "/notes",
            "h-[40px] w-[40px] p-2 hover:rounded hover:bg-slate-100  hover:text-indigo-500":
              !isSidebarOpen,
          })}
        />
      ),
      href: "/notes",
    },
    {
      title: "Data",
      icon: (
        <Table2
          className={cn("stroke-1", {
            "rounded bg-slate-100 text-indigo-500": pathName === "/table",
            "h-[40px] w-[40px] p-2 hover:rounded hover:bg-slate-100 hover:text-indigo-500":
              !isSidebarOpen,
          })}
        />
      ),
      href: "/table",
    },
  ];

  return (
    <aside
      className={cn(
        " relative flex h-screen  flex-col items-center border-r border-slate-200 transition-all duration-150",
        {
          "w-60": isSidebarOpen,
          "w-20": !isSidebarOpen,
        },
      )}
    >
      {/* 当折叠的时候, 得有一个按钮用来展开 */}
      {!isSidebarOpen && (
        <Button
          variant={"outline"}
          className="absolute -right-16 top-2"
          onClick={() => setIsSidebarOpen(true)}
        >
          <MenuIcon />
        </Button>
      )}

      {/* logo */}
      <div
        className={cn("flex flex-col space-y-2 border-b", {
          "p-4": isSidebarOpen,
          "p-2": !isSidebarOpen,
        })}
      >
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
          {isSidebarOpen && <span className="ml-3 text-xl">NoteWise</span>}
        </Link>
      </div>

      {/* nav */}
      <div
        className={cn("mt-3 flex h-full w-full flex-col", {
          "px-4": isSidebarOpen,
        })}
      >
        {/* <Button className="w-full">Add Note</Button> */}
        <ul className="mt-6 w-full flex-1 space-y-3">
          {sidebarNavItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={cn(
                  "flex cursor-pointer  rounded  transition-colors duration-150   ",
                  {
                    "bg-slate-100 hover:bg-slate-100":
                      pathName === item.href && isSidebarOpen,
                    "gap-2 p-2": isSidebarOpen,
                    "justify-center p-1": !isSidebarOpen,
                  },
                )}
              >
                {item.icon}
                {isSidebarOpen && (
                  <span
                    className={cn({
                      "bg-gradient-to-r from-violet-500 to-indigo-400 bg-clip-text font-bold text-transparent":
                        pathName === item.href,
                    })}
                  >
                    {item.title}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>

        {isSidebarOpen && (
          <Button
            variant="outline"
            className=" mb-3"
            onClick={() => setIsSidebarOpen(false)}
          >
            <ArrowLeftFromLine />
          </Button>
        )}
      </div>
    </aside>
  );
}
