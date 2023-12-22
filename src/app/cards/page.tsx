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
          `,
    answer: `Yes. Free to use for personal and commercial projects. No
    attribution required. <pre class="my-6 p-4 bg-gray-800 text-gray-100 rounded-md shadow-inner"><code>console.log("hello world");</code></pre>`,
    tags: ["ai", "gpt", "react"],
    date: dayjs().format("ll"),
  },
  {
    header: "cardset1 header2",
    content: `<h2 class="pb-2 text-3xl font-semibold tracking-tight first:mt-0" level="2">hello</h2><p>this is jiongxinliang</p><blockquote class="mt-6 border-l-2 pl-6 italic"><p>dwadwa</p></blockquote><p>dwadaw</p> <p><em>VueJs</em></p><p><em>NextjsCharka</em></p><p><s>dwadawdwa</s></p><p>This is 1996</p>`,
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
