import NormalCard from "@/components/tony/NormalCard";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex max-w-[1200px] flex-col items-center">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Card Set
      </h2>
      <NormalCard />

      <div className="flex justify-between gap-3">
        <Button
          variant="outline"
          className="transition-all duration-150 hover:scale-110"
        >
          <Check className="text-green-500" />
        </Button>

        <Button
          variant="outline"
          className="transition-all duration-150 hover:scale-110"
        >
          <X className="text-red-500" />
        </Button>
      </div>
    </div>
  );
}
