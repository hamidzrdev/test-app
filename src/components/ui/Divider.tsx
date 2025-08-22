import * as React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export default function Divider({
  children,
  className,
  ...props
}: DividerProps) {
  if (!children) {
    return (
      <hr
        className={cn("border-t border-gray-300 my-4", className)}
        {...props}
      />
    );
  }

  return (
    <div className={cn("flex items-center my-4", className)} {...props}>
      <span className="flex-1 border-t border-gray-300" />
      <span className="px-4 text-gray-500 text-sm">{children}</span>
      <span className="flex-1 border-t border-gray-300" />
    </div>
  );
}
