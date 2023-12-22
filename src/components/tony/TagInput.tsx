import React from "react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

type Props = {
  value: string;
  onChange: (...event: any[]) => void;
};

export default function TagInput({ value, onChange }: Props) {
  // const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   // add tag
  //   // e.preventDefault();
  //   if (e.key === "Enter") {
  //     const newTag = e.currentTarget.value.trim();
  //     if (newTag) {
  //       // 创建一个包含新标签数组的模拟事件对象
  //       const updatedTags = [...value.split(","), newTag].filter((tag) => tag); // 分割现有的字符串并添加新标签
  //       const event = { target: { value: updatedTags.join(",") } }; // 模拟事件对象
  //       onChange(event as any); // 调用 onChange 并传递模拟事件对象
  //       e.currentTarget.value = "";
  //     }
  //     e.preventDefault();
  //   }
  // };

  return (
    <div className="flex flex-col  gap-2 ring-offset-2">
      <Input
        className="flex-1 border-input  p-2 outline-none"
        // onKeyDown={handleInputEnter}
        value={value}
        onChange={onChange}
        placeholder="input your tags use comma to split different tags"
      />

      <div className="space-x-3">
        {value
          .split(",")
          .filter((tag) => tag)
          .map((tag, idx) => (
            <Badge key={idx}>{tag}</Badge>
          ))}
      </div>
    </div>
  );
}
