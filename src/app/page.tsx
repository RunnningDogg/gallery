"use client";
import Confetti from "@/components/tony/Confetti";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Check, Loader, LoaderIcon, X } from "lucide-react";
import { useState } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import ReactConfetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Home() {
  const [cardCurrentIdx, setCardCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  const [learnedCnt, setLearnedCnt] = useState(0);

  const cardsArray = Array.from({ length: 10 }, (_, k) => k);

  // cardsArray.map((item) => console.log(item));
  const currentIdx = cardsArray.find((item) => item === cardCurrentIdx);

  const handleNextClick = () => {
    setLoading(true);
    setTimeout(() => {
      setCardCurrentIdx(cardCurrentIdx + 1);
      setLearnedCnt(learnedCnt + 1);
      setLoading(false);
    }, 2000);
  };

  const { width, height } = useWindowSize();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8  p-24">
      <div>hello</div>
      <Card className="w-[300px]" key={currentIdx}>
        <CardHeader>Card Header {currentIdx}</CardHeader>
        <CardContent className="h-[15rem]">
          This is a card{currentIdx}
        </CardContent>
        <CardFooter className="flex justify-between gap-3">
          <Button
            disabled={loading}
            variant="outline"
            onClick={handleNextClick}
          >
            <Check className="text-green-500" />
          </Button>

          <Button disabled={loading} variant="outline">
            <X className="text-red-500" />
          </Button>
        </CardFooter>
      </Card>
      <Button className="flex items-center gap-2" onClick={handleNextClick}>
        {loading && <Loader className="animate-spin" />}
        Next
      </Button>

      {loading && <ReactConfetti width={width} height={height} />}

      {/* <ReactCanvasConfetti fire={loading} /> */}
      {/* <Confetti /> */}
    </main>
  );
}
