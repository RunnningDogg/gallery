"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Check,
  ChevronDown,
  ChevronUp,
  ChevronsDownUp,
  ChevronsUpDown,
  X,
} from "lucide-react";
import { Badge } from "../ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

type Props = {};

export default function NormalCard({}: Props) {
  const currentIdx = 1;

  const tags = ["tech", "ai"];

  const answer = "this is the answer";

  const [collapsible, setCollapsible] = useState(false);

  return (
    <div className="max-w-4xl p-6">
      <Card key={currentIdx}>
        <CardHeader className="scroll-m-20 pb-2 text-center text-3xl font-semibold tracking-tight first:mt-0">
          Card Header {currentIdx}
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="mb-3">
            This is a card{currentIdx} Great work... It can be applied to entire
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
            more tutorials on animation
          </p>

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
              Yes. Free to use for personal and commercial projects. No
              attribution required.
            </CollapsibleContent>
          </Collapsible>

          <div className="flex justify-center">
            {tags.map((item) => (
              <Badge key={item} variant="outline" className="text-sm">
                <span>{item}</span>
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="mt-3 flex justify-between gap-3">
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
        </CardFooter>
      </Card>
    </div>
  );
}
