import { useState } from "react";
import { cn } from "@/lib/utils";

export function Accordion({
  items,
  className,
}: {
  items: { id: string; title: string; content: string }[];
  className?: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <div className={cn("divide-y divide-border/60", className)}>
      {items.map((it) => {
        const open = openId === it.id;
        return (
          <div key={it.id} className="py-2">
            <button
              type="button"
              onClick={() => setOpenId(open ? null : it.id)}
              className="flex w-full items-center justify-between gap-4 py-3 text-left"
            >
              <span className="font-heading text-sm font-semibold text-foreground">{it.title}</span>
              <span className={cn("text-sm text-muted-foreground transition-transform", open && "rotate-45")}>+</span>
            </button>
            {open ? (
              <div className="pb-4 text-sm leading-relaxed text-muted-foreground">{it.content}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
