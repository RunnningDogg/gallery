"use client";
import NormalCard from "@/components/tony/NormalCard";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { Check, X } from "lucide-react";
import React, { useEffect } from "react";
import { z } from "zod";
type Props = {};
import localizedFormat from "dayjs/plugin/localizedFormat";
dayjs.extend(localizedFormat);

const productSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
});

type Product = z.infer<typeof productSchema>;

const getPriceFromProduct = (product: Product) => {
  return product.price;
};

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
    date: dayjs().format("ll"),
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
    date: dayjs().format("ll"),
  },
];

export default function Page({}: Props) {
  useEffect(() => {
    const fetchData = async () => {
      fetch("/api/hello")
        .then((res) => res.json())
        .then((data: Product) => {
          const validateProduct = productSchema.safeParse(data);
          if (!validateProduct.success) {
            console.log(validateProduct.error);
            return;
          }
          console.log(validateProduct.data.name.toUpperCase());
        });
    };
    fetchData();
  }, []);

  return (
    <div className="flex max-w-[1200px] flex-col items-center">
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Card Set
      </h2>

      <NormalCard cardSets={cardSets} />
    </div>
  );
}
