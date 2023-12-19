import React from "react";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";

type Props = {
  value: string;
  onChange: (...event: any[]) => void;
};

export default function TagInput({ value, onChange }: Props) {
  const [tags, setTags] = React.useState<string[]>(["react", "next"]);

  const handleInputEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // add tag
    // e.preventDefault();
    if (e.key === "Enter") {
      setTags([...tags, e.currentTarget.value]);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="flex min-w-[300px] flex-wrap items-center gap-2 border border-input p-3 ring-offset-2">
      <div className="space-x-3">
        {tags.map((tag, idx) => (
          <Badge key={idx}>{tag}</Badge>
        ))}
      </div>

      <input
        className="flex-1 border-none  p-1 outline-none"
        onKeyDown={handleInputEnter}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
