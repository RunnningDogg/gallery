"use client";
import React from "react";
// import "@/app/typography.css";
type Props = {};
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function ReadPage({}: Props) {
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div className="space-y-5 overflow-hidden">
      <h2 className=" scroll-m-20 border-b pb-2 pl-2 text-3xl font-semibold tracking-tight first:mt-0">
        Read Page
      </h2>
      <Button className="duration-300 animate-in fade-in slide-in-from-bottom">
        Click Me
      </Button>

      <motion.div
        // initial={{ opacity: 0 }}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="h-[1500px]"
      >
        Hello this is content
      </motion.div>

      <motion.div
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        transition={{ duration: 1 }}
        viewport={{
          once: true,
        }}
        className="h-screen text-3xl font-bold"
      >
        Framer Motion
        <Image src="/next.svg" alt="nextsvg" width={100} height={100} />
      </motion.div>

      {/* <motion.img
        className="h-16 w-16"
        src="/vercel.svg"
        animate={{ scale: 1.5 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      /> */}
    </div>
  );
}
