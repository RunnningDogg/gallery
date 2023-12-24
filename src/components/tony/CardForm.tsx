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
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Tiptap from "./TipTap";
import toast, { Toaster } from "react-hot-toast";
import TagInput from "./TagInput";
import DatePicker from "../ui/date-picker";

type Props = {};

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  front: z.string(),
  back: z.string(),
  tag: z.string(),
  date: z.date(),
});

export default function CardForm({}: Props) {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    mode: "onChange",
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      front: "",
      tag: "",
      date: new Date(),
    },
  });
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success(JSON.stringify(values, null, 2));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            // render multiple tags react on user input enter
            <FormItem className="flex flex-col gap-1">
              <FormLabel>Date</FormLabel>
              <DatePicker onChange={field.onChange} value={field.value} />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="front"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Card Front Content⭐️</FormLabel>
              <FormDescription>
                Describe your anki card front content that helps you recall
              </FormDescription>
              <FormControl>
                <Tiptap value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="back"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Card Back Content⭐️</FormLabel>
              <FormDescription>
                Something really need to remember like exam, interview, etc.
                {field.value}
              </FormDescription>
              <FormControl>
                <Tiptap value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tag"
          render={({ field }) => (
            // render multiple tags react on user input enter
            <FormItem>
              <FormLabel>Tags(optional)</FormLabel>
              <TagInput onChange={field.onChange} value={field.value} />
            </FormItem>
          )}
        />

        <div className="space-x-3">
          <Button type="submit">Submit</Button>

          <Button variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
        </div>
      </form>
      <Toaster />
    </Form>
  );
}
