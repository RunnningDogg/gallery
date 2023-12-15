"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Tag,
  X,
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import dayjs from "dayjs";
import { ICardProps } from "@/schema/card";

export default function NormalCard({ cardSets }: ICardProps) {
  const [collapsible, setCollapsible] = useState(false);

  // 多卡片翻页
  const [currentIdx, setCurrentIdx] = useState(0);

  const currentCard = cardSets[currentIdx];

  const nextSet = () => {
    // setSlideDirection("left");
    setCurrentIdx((prevIndex) => (prevIndex + 1) % cardSets.length);
  };

  const previousSet = () => {
    // setSlideDirection("right");
    setCurrentIdx(
      (prevIndex) => (prevIndex - 1 + cardSets.length) % cardSets.length,
    );
  };

  return (
    <div className="flex max-w-4xl flex-col justify-center space-y-3 p-6">
      {/* left */}
      {/* <ArrowLeft
        onClick={previousSet}
        className="absolute left-[15rem] top-1/3 h-10 w-10 cursor-pointer text-violet-500 transition-all duration-150 hover:scale-110 hover:via-violet-700"
      />
      <ArrowRight
        onClick={nextSet}
        className="absolute right-[5rem] top-1/3 h-10 w-10 cursor-pointer text-violet-500 transition-all duration-150 hover:scale-110 hover:via-violet-700 "
      /> */}

      {/* card */}
      <Card key={currentIdx} className="">
        <CardHeader className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
          {currentCard.header}
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="mb-3">{currentCard.content}</p>

          <Collapsible>
            <div className="flex items-center justify-center space-x-4 px-4">
              <h4 className="text-lg font-semibold">Show The Answer</h4>
              <CollapsibleTrigger asChild>
                <Button
                  onClick={() => setCollapsible(!collapsible)}
                  variant="outline"
                  size="sm"
                  className="w-9 p-0"
                >
                  {!collapsible ? (
                    <ChevronDown className="h-4 w-4" />
                  ) : (
                    <ChevronUp className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-center">
              {currentCard.answer}
            </CollapsibleContent>
          </Collapsible>

          {/* <Separator />  */}
        </CardContent>

        <CardFooter className="">
          <div className=" flex w-full items-center  justify-between gap-2 ">
            <span className="text-sm text-muted-foreground">
              {currentCard.date}
            </span>
            <div className="flex items-center gap-2">
              <Tag className="mr-2 h-5 w-5 text-violet-500" />
              {currentCard?.tags?.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="flex items-center bg-violet-600 text-sm text-slate-100"
                >
                  <span>{item}</span>
                  {/* <X className="ml-1 h-4 w-4 cursor-pointer transition-all duration-150 hover:scale-110" /> */}
                </Badge>
              ))}
            </div>
          </div>
        </CardFooter>
      </Card>

      <div className="flex justify-between gap-3">
        <Button onClick={previousSet}>Prev</Button>
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
        <Button onClick={nextSet}>Next</Button>
      </div>
    </div>
  );
}
