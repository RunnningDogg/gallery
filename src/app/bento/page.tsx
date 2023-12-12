"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {};

const handleAnchorClick = (
  to: string,
  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
) => {
  e.preventDefault();
  const targetElement = document.getElementById(to);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const SmoothScrollLink = ({
  to,
  children,
  className,
}: {
  to: string;
  children: ReactNode;
  className?: string;
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const targetElement = document.getElementById(to);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={cn(
        "transition-colors duration-200 hover:text-violet-500",
        className,
      )}
    >
      {children}
    </a>
  );
};

export default function Bento({}: Props) {
  return (
    <div className="ml-6 max-w-[1200px] space-y-8 px-2 py-8">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight">
        Bento Layout
      </h2>

      <nav>
        <ul className="flex flex-col gap-2 border-l-[3px] pl-2">
          <li>
            <SmoothScrollLink to="section1">Layout1</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="section2">Layout2</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="section3">Layout3</SmoothScrollLink>
          </li>
          <li>
            <SmoothScrollLink to="section4">Layout4</SmoothScrollLink>
          </li>
        </ul>
      </nav>

      <h3
        className="group relative  text-2xl font-semibold tracking-tight"
        id="section1"
      >
        Layout1
        <a
          href="#section1"
          className="header-anchor absolute left-0 ml-[-0.87em] text-violet-400 opacity-0 transition-opacity duration-200 before:content-['#'] group-hover:opacity-100"
          onClick={(e) => handleAnchorClick("section1", e)}
        ></a>
      </h3>

      <div className="grid-rows-8 grid min-h-[500px] grid-cols-8 gap-2 bg-slate-100">
        <div className="col-span-2 row-span-6 flex items-center justify-center rounded-md bg-blue-300">
          1
        </div>
        <div className="col-span-2 row-span-3 flex items-center justify-center rounded-md bg-blue-300">
          2
        </div>
        <div className="col-span-4 row-span-3 flex items-center justify-center rounded-md bg-blue-300">
          3
        </div>
        <div className="col-span-4 row-span-4 flex items-center justify-center rounded-md bg-blue-300">
          4
        </div>
        <div className="col-span-2 row-span-4 flex items-center justify-center rounded-md bg-blue-300">
          5
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300">
          6
        </div>
        <div className="col-span-2 row-span-1 flex items-center justify-center rounded-md bg-blue-300">
          7
        </div>
        <div className="col-span-2 row-span-1 flex items-center justify-center rounded-md bg-blue-300">
          8
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300">
          9
        </div>
      </div>

      <h3
        className="group relative  text-2xl font-semibold tracking-tight"
        id="section2"
      >
        Layout2
        <a
          href="#section2"
          className="header-anchor absolute left-0 ml-[-0.87em] text-violet-400 opacity-0 transition-opacity duration-200 before:content-['#'] group-hover:opacity-100"
          onClick={(e) => handleAnchorClick("section2", e)}
        ></a>
      </h3>

      <div className=" grid-rows-8 grid min-h-[500px] grid-flow-row-dense  grid-cols-8 gap-2 bg-slate-100">
        <div className="col-span-4 row-span-6 flex items-center justify-center rounded-md bg-blue-300">
          1
        </div>
        <div className="col-span-2 row-span-6 flex items-center justify-center rounded-md bg-blue-300">
          2
        </div>
        <div className="col-span-2 row-span-4 flex items-center justify-center rounded-md bg-blue-300">
          3
        </div>
        <div className="col-span-2 row-span-4 flex items-center justify-center rounded-md bg-blue-300">
          4
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300">
          5
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300">
          6
        </div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300">
          7
        </div>
      </div>

      <h3
        className="group relative  text-2xl font-semibold tracking-tight"
        id="section3"
      >
        Layout3
        <a
          href="#section3"
          className="header-anchor absolute left-0 ml-[-0.87em] text-violet-400 opacity-0 transition-opacity duration-200 before:content-['#'] group-hover:opacity-100"
          onClick={(e) => handleAnchorClick("section3", e)}
        ></a>
      </h3>

      <div className="grid-rows-8 grid min-h-[500px] grid-cols-8 gap-2 bg-slate-100">
        <div className="col-span-6 row-span-6 flex items-center justify-center rounded-md bg-blue-300"></div>
        <div className="col-span-2 row-span-6 flex items-center justify-center rounded-md bg-blue-300"></div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300"></div>
        <div className="col-span-4 row-span-2 flex items-center justify-center rounded-md bg-blue-300"></div>
        <div className="col-span-2 row-span-2 flex items-center justify-center rounded-md bg-blue-300"></div>
      </div>

      <h3
        className="group relative text-2xl font-semibold tracking-tight"
        id="section4"
      >
        Block
        <a
          href="#section4"
          className="header-anchor absolute left-0 ml-[-0.87em] text-violet-400 opacity-0 transition-opacity duration-200 before:content-['#'] group-hover:opacity-100"
          onClick={(e) => handleAnchorClick("section4", e)}
        ></a>
      </h3>
      <div className="min-h-[600px] bg-slate-100"></div>
    </div>
  );
}
