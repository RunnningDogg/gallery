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
  ChevronDown,
  ChevronUp,
  Tag,
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Props = {};

export default function NormalCard({}: Props) {
  const [collapsible, setCollapsible] = useState(false);

  // 多卡片翻页
  const [currentIdx, setCurrentIdx] = useState(0);
  // const [slideDirection, setSlideDirection] = useState("left");
  const cardSets = [
    {
      header: "cardset1 header1",
      content: `This is a card{currentIdx} Great work... It can be applied to entire
            page like when page rendered the animation begin on textboxes and
            buttons ... Can you do more tutorials on animation Great work... It
            can be applied to entire page like when page rendered the animation
            begin on textboxes and buttons ... Can you do more tutorials on
            animation Great work... It can be applied to entire page like when
            page rendered the animation begin on textboxes and buttons ... Can
            you do more tutorials on animation This is a card{currentIdx} Great
            work... It can be applied to entire page like when page rendered the
            animation begin on textboxes and buttons ... Can you do more
            tutorials on animation Great work... It can be applied to entire
            page like when page rendered the animation begin on textboxes and
            buttons ... Can you do more tutorials on animation Great work... It
            can be applied to entire page like when page rendered the animation
            begin on textboxes and buttons ... Can you do more tutorials on
            animation This is a card
            {currentIdx} Great work... It can be applied to entire page like
            when page rendered the animation begin on textboxes and buttons ...
            Can you do more tutorials on animation Great work... It can be
            applied to entire page like when page rendered the animation begin
            on textboxes and buttons ... Can you do more tutorials on animation
            Great work... It can be applied to entire page like when page
            rendered the animation begin on textboxes and buttons ... Can you do
            more tutorials on animation`,
      answer: `Yes. Free to use for personal and commercial projects. No
      attribution required.`,
      tags: ["ai", "gpt", "react"],
    },
    {
      header: "cardset1 header2",
      content: `This is a card{currentIdx} Great work... It can be applied to entire
            page like when page rendered the animation begin on textboxes and
            buttons ... Can you do more tutorials on animation Great work... It
            can be applied to entire page like when page rendered the animation
            begin on textboxes and buttons ... Can you do more tutorials on
            animation Great work... It can be applied to entire page like when
            page rendered the animation begin on textboxes and buttons ...`,
      answer: `This is from 1998 说唱领袖.`,
      tags: ["backend", "java"],
    },
  ];

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
    <div className="flex max-w-4xl justify-center p-6">
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
          <div className="flex items-center justify-start gap-2 ">
            <div className="flex items-center">
              <Tag className="h-5 w-5 text-violet-500" />
              <span></span>
            </div>
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
        </CardFooter>
      </Card>
    </div>
  );
}
