"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React from "react";

type Props = {};

export default function Header({}: Props) {
  const pathName = usePathname();

  return (
    <header className="body-font   text-gray-600">
      <div className=" mx-auto flex flex-col flex-wrap items-center gap-2 p-5 md:flex-row md:gap-5">
        <nav className="flex flex-col flex-wrap items-center justify-center gap-2 text-base md:ml-auto md:flex-row md:gap-5">
          <Link
            href="/about"
            className={cn(
              "cursor-pointer transition-colors duration-200 hover:text-violet-500",
              {
                "text-violet-500": pathName === "/about",
              },
            )}
          >
            About Me
          </Link>

          <Link
            href="/blog"
            className={cn(
              "cursor-pointer transition-colors duration-200 hover:text-violet-500",
              {
                "text-violet-500": pathName === "/blog",
              },
            )}
          >
            Blog
          </Link>
        </nav>
        <Button>Login</Button>
      </div>
    </header>
  );
}
