"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import toast, { Toaster } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { addDays } from "date-fns";
import { DatePickerWithRangeControl } from "./range-date-picker";

type Props = {};

const formSchema = z.object({
  cardNum: z.number(),
  dateRange: z.object({
    from: z.date(),
    to: z.date(),
  }),
});

export default function DateForm({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      cardNum: 10,
      dateRange: {
        from: addDays(new Date(), -7),
        to: new Date(),
      },
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(JSON.stringify(values));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="dateRange"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                {/* <Input placeholder="shadcn" {...field} /> */}
                <DatePickerWithRangeControl
                  date={field.value}
                  onChange={field.onChange}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cardNum"
          render={({ field }) => (
            // render multiple tags react on user input enter
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Date</FormLabel>
              <Select>
                <SelectTrigger className="w-[180px]" id="cardnum">
                  <SelectValue placeholder="Select a Card Num" />
                </SelectTrigger>
                <SelectContent {...field}>
                  <SelectGroup>
                    <SelectLabel>Cards Num</SelectLabel>
                    <SelectItem value="10">10</SelectItem>
                    <SelectItem value="20">20</SelectItem>
                    <SelectItem value="30">30</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit">Go</Button>
      </form>
      <Toaster />
    </Form>
  );
}
