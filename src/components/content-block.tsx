import { cn } from "@/lib/utils";
import React from "react";

type ContentBlockProps = {
  children: React.ReactNode;
  className?: string;
};
export default function ContentBlock({
  children,
  className,
}: ContentBlockProps) {
  return (
    <div
      className={cn(
        "bg-slate-200 shadow-sm  rounded-md overflow-hidden h-full w-full",
        className
      )}
    >
      {children}
    </div>
  );
}
