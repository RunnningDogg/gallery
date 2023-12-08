import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
type Props = {};

export default function CardFlip({}: Props) {
  const [isFliped, setIsFliped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFliped(!isFliped);
      setIsAnimating(true);
    }
  }
  const currentIdx = 1;

  return (
    <div className="w-[100%]">
      <motion.div
        className="card w-full"
        initial={false}
        animate={{
          rotateY: isFliped ? 180 : 360,
        }}
        transition={{ duration: 0.3, animationDirection: "normal" }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <div className="card-front">
          <Card key={currentIdx}>
            <CardHeader>Card Header {currentIdx}</CardHeader>
            <CardContent>
              This is a card{currentIdx} Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation{" "}
              Great work... It can be applied to entire page like when page
              rendered the animation begin on textboxes and buttons ... Can you
              do more tutorials on animation Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation
              This is a card{currentIdx} Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation{" "}
              Great work... It can be applied to entire page like when page
              rendered the animation begin on textboxes and buttons ... Can you
              do more tutorials on animation Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation
              This is a card{currentIdx} Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation{" "}
              Great work... It can be applied to entire page like when page
              rendered the animation begin on textboxes and buttons ... Can you
              do more tutorials on animation Great work... It can be applied to
              entire page like when page rendered the animation begin on
              textboxes and buttons ... Can you do more tutorials on animation
            </CardContent>

            <CardFooter className="flex justify-between gap-3">
              <Button variant="outline">
                <Check className="text-green-500" />
              </Button>

              <Button variant="outline">
                <X className="text-red-500" />
              </Button>

              <Button onClick={handleFlip}>Flip</Button>
            </CardFooter>
          </Card>
        </div>

        <div className="card-back">
          <Card>
            <CardHeader>Card Back {currentIdx}</CardHeader>
            <CardContent>This is a card{currentIdx}</CardContent>
            <CardFooter className="flex justify-between gap-3">
              <Button onClick={handleFlip}>Go Back</Button>
            </CardFooter>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
