import { useEffect, useMemo, useState } from "react";
import { storeConfig } from "@/data/storeConfig";
import { cn } from "@/lib/utils";

export function TopBar({ className }: { className?: string }) {
  const messages = useMemo(() => storeConfig.trustMessages, []);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setIndex((prev) => (prev === messages.length - 1 ? 0 : prev + 1));
    }, 3500);

    return () => window.clearInterval(id);
  }, [messages.length]);

  return (
    <div
      className={cn(
        "relative z-50 w-full border-b border-border/70 bg-background/70 backdrop-blur-md",
        className,
      )}
    >
      <div className="container-wide flex h-9 items-center justify-center">
        <div className="text-xs font-medium tracking-wide text-muted-foreground">
          {messages[index]}
        </div>
      </div>
    </div>
  );
}
