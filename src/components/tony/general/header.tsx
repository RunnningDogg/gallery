import { Button } from "@/components/ui/button";
import Link from "next/link";

import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="body-font h-[5vh] text-gray-600">
      <div className=" mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row">
        <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
          <Link
            href="/about"
            className="mr-5 cursor-pointer hover:text-gray-900"
          >
            About Me
          </Link>

          <Link href="#" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
        </nav>
        <Button>Login</Button>
      </div>
    </header>
  );
}
