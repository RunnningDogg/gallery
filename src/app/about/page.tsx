"use client";
import React from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import ZodForm from "@/components/tony/learn/ZodForm";
type Props = {};

const skills = [
  "typescript",
  "javascript",
  "react",
  "nextjs",
  "node",
  "python",
  "java",
  "c",
  "zustand",
  "Git",
  "PostgreSQL",
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: idx * 0.1,
    },
  }),
};

export default function AboutPage({}: Props) {
  return (
    <div className="mx-auto  flex max-w-[1200px] flex-col items-center space-y-6">
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        About Me
      </h2>

      <p className="mb-3 max-w-[45rem] text-center leading-8">
        After graduating with a degree in{" "}
        <span className="font-medium">Accounting</span>, I decided to pursue my
        passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Skill Set
      </h2>

      <ul className="flex max-w-2xl flex-wrap justify-center gap-5 text-lg text-gray-800">
        {skills.map((item, idx) => (
          <motion.li
            variants={fadeInAnimationVariants}
            custom={idx}
            initial="initial"
            animate="animate"
            viewport={{ once: true }}
            className=" cursor-pointer rounded border px-5 py-3 hover:text-violet-500 "
            key={idx}
          >
            {item}
          </motion.li>
        ))}
      </ul>

      <ZodForm />
    </div>
  );
}
