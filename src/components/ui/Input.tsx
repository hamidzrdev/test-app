import * as React from "react"
import { cn } from "@/lib/utils"

interface InputProps extends React.ComponentProps<"input"> {
  icon?: React.ReactNode
  actions?: React.ReactNode
}

function Input({ className, type, icon, actions, ...props }: InputProps) {
  return (
    <div className="relative w-full">

      {icon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
          {icon}
        </div>
      )}

      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-white placeholder:text-white/50 selection:bg-primary selection:text-primary-foreground dark:bg-input/30  flex h-9 w-full min-w-0 rounded-md border border-gray-400 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          icon ? "pl-9" : "pl-3",
          actions ? "pr-9" : "pr-3",
          " focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-0"
         ,
          className
        )}
        {...props}
      />
      {actions && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer">
          {actions}
        </div>
      )}
    </div>
  )
}

export { Input }
