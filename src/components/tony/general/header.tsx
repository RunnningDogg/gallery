import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="text-gray-600 body-font">
      <div className=" mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 hover:text-gray-900">First Link</a>
          <a className="mr-5 hover:text-gray-900">Second Link</a>
          <a className="mr-5 hover:text-gray-900">Third Link</a>
          <a className="mr-5 hover:text-gray-900">Fourth Link</a>
        </nav>
        <Button>Login</Button>
      </div>
    </header>
  );
}
