import { z } from "zod";

// 定义一个解析和验证日期字符串的 Zod schema
const dateStringSchema = z.string().refine(
  (value) => {
    // 正则表达式，用于匹配格式为 YYYY-MM-DD 的日期字符串
    return /^\d{4}-\d{2}-\d{2}$/.test(value);
  },
  {
    message: "日期格式不正确，应为 YYYY-MM-DD",
  },
);
// .transform((value) => new Date(value));

// schema for anki flash card
export const cardSchema = z.object({
  // 卡片id, 后期加上uuid的schema
  card_id: z.string(), //主键
  user_email: z.string(), // 第三方登录
  // 卡片内容
  title: z.string(), // 用户填
  front: z.string(), // 用户填
  back: z.string(), // 用户填
  tags: z.array(z.string()), // 用户填
  // 卡片的状态
  created_date: dateStringSchema.optional(), // 用户填
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

export type TCard = z.infer<typeof cardSchema>;
