import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "w-full min-h-[180px] px-4 py-3 text-[15px]",
        "border border-secondary/40 bg-white text-primary placeholder:text-secondary",
        "outline-none focus:border-accent",
        "resize-none",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props} />
  );
}

export { Textarea }
