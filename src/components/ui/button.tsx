import * as React from "react";

import { cn } from "@/lib/utils";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "lg" | "icon";
};

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-foreground text-background hover:bg-foreground/90",
        variant === "outline" &&
          "border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
        variant === "ghost" && "bg-transparent text-foreground hover:bg-accent",
        size === "default" && "h-10 px-4",
        size === "lg" && "h-12 px-6",
        size === "icon" && "h-10 w-10",
        className,
      )}
      {...props}
    />
  );
}
