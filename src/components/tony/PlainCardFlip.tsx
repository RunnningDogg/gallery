"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import { Button } from "../ui/button";

type Props = {};

export default function PlainCardFlip({}: Props) {
  const [fliped, setFilped] = useState(false);

  const handleFlip = () => {
    setFilped(!fliped);
  };
  return (
    <div
      className={cn("border card", {
        active: fliped,
        inactive: !fliped,
      })}
    >
      <div className="card-front p-3">
        {/* <span className="text-black">Card Front</span> */}
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          The People of the Kingdom
        </h2>
        <Button onClick={() => setFilped(!fliped)}>Flip</Button>
      </div>
      <div className="card-back">
        Card back
        <Button onClick={() => setFilped(!fliped)}>Flip</Button>
      </div>
    </div>
  );
}
