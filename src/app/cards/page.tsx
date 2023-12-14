"use client";
import NormalCard from "@/components/tony/NormalCard";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import React, { useEffect } from "react";
import { z } from "zod";
type Props = {};

const productSchema = z.object({
  name: z.string(),
  price: z.number().positive(),
});

type Product = z.infer<typeof productSchema>;

const getPriceFromProduct = (product: Product) => {
  return product.price;
};

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

      <NormalCard />

      <div className="flex justify-between gap-3">
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
      </div>
    </div>
  );
}
