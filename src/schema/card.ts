import React from "react";
import { z } from "zod";
import { format } from "date-fns";

interface CardItem {
  header: string;
  content: string;
  tags: string[];
  date: string;
  answer: string;
}

export interface ICardProps extends React.HTMLAttributes<HTMLElement> {
  cardSets: CardItem[];
}

// 后端数据schema

// 定义一个解析和验证日期字符串的 Zod schema
const dateStringSchema = z
  .string()
  .refine((val) => !isNaN(Date.parse(val)), { message: "Invalid date format" })
  .transform((val) => format(new Date(val), "yyyy-MM-dd"));

export const CardSchema = z.object({
  // 卡片id, 后期加上uuid的schema
  card_id: z.number(), //主键
  user_email: z.string(), // 第三方登录
  // 卡片内容
  title: z.string(), // 用户填
  front: z.string(), // 用户填
  back: z.string(), // 用户填
  tags: z.array(z.string()), // 用户填
  // 卡片的状态
  created_date: dateStringSchema.optional(),
  modified_date: dateStringSchema.optional(),

  // z.date接收的是js的Date对象，而不是字符串
  // 卡片回忆日期
  recalled_first_date: dateStringSchema.optional(),
  recalled_second_date: dateStringSchema.optional(),
  recalled_third_date: dateStringSchema.optional(),
  recalled_fourth_date: dateStringSchema.optional(),
  recalled_fifth_date: dateStringSchema.optional(),

  // 卡片回忆记住的程度
  recalled_first_score: z.number().optional(),
  recalled_second_score: z.number().optional(),
  recalled_third_score: z.number().optional(),
  recalled_fourth_score: z.number().optional(),
  recalled_fifth_score: z.number().optional(),
});

export type TCard = z.infer<typeof CardSchema>;

export const cardSchemaArray = z.array(CardSchema);
