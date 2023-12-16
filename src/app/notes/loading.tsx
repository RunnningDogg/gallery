import { Loader2 } from "lucide-react";
import React from "react";

type Props = {};

export default function loading({}: Props) {
  return (
    <div className="ml-6">
      <Loader2 className="animate-spin" /> loading
    </div>
  );
}
