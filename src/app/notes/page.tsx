import CardForm from "@/components/tony/CardForm";
import Tiptap from "@/components/tony/TipTap";
import React from "react";

type Props = {};

export default function DataPage({}: Props) {
  return (
    <div className="ml-6">
      <h2 className=" scroll-m-20  pb-2  text-3xl font-semibold tracking-tight first:mt-0">
        Data Page
      </h2>
      {/* <div className="mx-auto max-w-3xl rounded border">
        <Tiptap />
      </div> */}

      <div className="rounder  max-w-3xl">
        <CardForm />
      </div>
    </div>
  );
}
