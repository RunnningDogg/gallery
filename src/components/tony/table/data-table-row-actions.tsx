import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cardSchema } from "./data/schema";
import { Row } from "@tanstack/react-table";
import TableCard from "../table-card-item";

type Props<TData> = {
  row: Row<TData>;
};

export default function DataTableRowActions<TData>({ row }: Props<TData>) {
  const card = cardSchema.parse(row.original);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Card</Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Anki Card Rewind</DialogTitle>
          <DialogDescription>
            Try to recall amap(as much as possible)
          </DialogDescription>
        </DialogHeader>

        <TableCard cardItem={card} />
        {/* <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter> */}
      </DialogContent>
    </Dialog>
  );
}
