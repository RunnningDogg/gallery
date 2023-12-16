"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "./data/schema";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";

import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

const columnHelper = createColumnHelper<Card>();

// 定义表格列的类型
export const columns: ColumnDef<Card>[] = [
  // 多选框
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  // card_id
  // {
  //   accessorKey: "card_id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Task" />
  //   ),
  //   cell: ({ row }) => <div className="">{row.getValue("card_id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // title
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("title")}</div>,
  },
  // front
  {
    accessorKey: "front",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Front" />
    ),
    cell: ({ row }) => <div className="">{row.getValue("front")}</div>,
  },
  // tags
  {
    accessorKey: "tags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tags" />
    ),
    cell: ({ row }) => (
      <div className="flex flex-wrap items-start gap-2">
        {(row.getValue("tags") as string[]).map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    ),
  },
  // recalled_first_date
  // columnHelper.display({
  //   id: "recalled_first_date",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="First Date" />
  //   ),
  //   cell: ({ row }) => {
  //     console.log(row.getValue("recalled_first_score"));
  //     return (
  //       <div
  //         className={cn({
  //           "bg-teal-100": row.getValue("recalled_first_score") === 4,
  //           "bg-sky-100": row.getValue("recalled_first_score") === 3,
  //           "bg-amber-100": row.getValue("recalled_first_score") === 2,
  //           "text-red-500": row.getValue("recalled_first_score") === 1,
  //         })}
  //       >
  //         {row.getValue("recalled_first_date")}
  //       </div>
  //     );
  //   },
  // }),
  {
    accessorKey: "recalled_first_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="First Date" />
    ),
    cell: ({ row }) => (
      <div
        className={cn("rounded p-1", {
          "bg-teal-100": row.getValue("recalled_first_score") === 4,
          "bg-sky-100": row.getValue("recalled_first_score") === 3,
          "bg-amber-100": row.getValue("recalled_first_score") === 2,
          "bg-rose-100": row.getValue("recalled_first_score") === 1,
        })}
      >
        {row.getValue("recalled_first_date")}
      </div>
    ),
  },
  // recalled_second_date
  {
    accessorKey: "recalled_second_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Second Date" />
    ),
    cell: ({ row }) => (
      <div
        className={cn("rounded p-1", {
          "bg-teal-100": row.getValue("recalled_second_score") === 4,
          "bg-sky-100": row.getValue("recalled_second_score") === 3,
          "bg-amber-100": row.getValue("recalled_second_score") === 2,
          "bg-rose-100": row.getValue("recalled_second_score") === 1,
        })}
      >
        {row.getValue("recalled_second_date")}
      </div>
    ),
  },
  // recalled_third_date
  {
    accessorKey: "recalled_third_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Third Date" />
    ),
    cell: ({ row }) => (
      <div
        className={cn("rounded p-1", {
          "bg-teal-100": row.getValue("recalled_third_score") === 4,
          "bg-sky-100": row.getValue("recalled_third_score") === 3,
          "bg-amber-100": row.getValue("recalled_third_score") === 2,
          "bg-rose-100": row.getValue("recalled_third_score") === 1,
        })}
      >
        {row.getValue("recalled_third_date")}
      </div>
    ),
  },
  // recalled_fourth_date
  {
    accessorKey: "recalled_fourth_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fourth Date" />
    ),
    cell: ({ row }) => (
      <div
        className={cn("rounded p-1", {
          "bg-teal-100": row.getValue("recalled_fourth_score") === 4,
          "bg-sky-100": row.getValue("recalled_fourth_score") === 3,
          "bg-amber-100": row.getValue("recalled_fourth_score") === 2,
          "bg-rose-100": row.getValue("recalled_fourth_score") === 1,
        })}
      >
        {row.getValue("recalled_fourth_date")}
      </div>
    ),
  },
  // recalled_fifth_date
  {
    accessorKey: "recalled_fifth_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Fifth Date" />
    ),
    cell: ({ row }) => (
      <div
        className={cn("rounded p-1", {
          "bg-teal-100": row.getValue("recalled_fifth_score") === 4,
          "bg-sky-100": row.getValue("recalled_fifth_score") === 3,
          "bg-amber-100": row.getValue("recalled_fifth_score") === 2,
          "bg-rose-100": row.getValue("recalled_fifth_score") === 1,
        })}
      >
        {row.getValue("recalled_fifth_date")}
      </div>
    ),
  },
  {
    accessorKey: "recalled_first_score",
  },
  {
    accessorKey: "recalled_second_score",
  },
  {
    accessorKey: "recalled_third_score",
  },
  {
    accessorKey: "recalled_fourth_score",
  },
  {
    accessorKey: "recalled_fifth_score",
  },
];
