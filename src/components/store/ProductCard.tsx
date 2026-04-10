import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import type { Product } from "@/data/catalog";
import { formatMoney } from "@/lib/money";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const isNew = product.tags.includes("new");
  const isFeatured = product.tags.includes("featured");

  return (
    <div className={cn("group rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm transition-shadow hover:shadow-lg", className)}>
      <Link to={`/products/${product.handle}`} className="block overflow-hidden rounded-2xl">
        <div className="relative aspect-[4/3] bg-muted">
          <img
            src={product.media[0]?.src}
            alt={product.media[0]?.alt ?? product.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute left-4 top-4 flex gap-2">
            {isNew ? (
              <span className="rounded-full bg-black/70 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg backdrop-blur-sm">Nuevo</span>
            ) : null}
            {isFeatured ? (
              <span className="rounded-full bg-[#D4AF37] px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg">Destacado</span>
            ) : null}
          </div>
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link to={`/products/${product.handle}`} className="block">
              <div className="truncate font-heading text-sm font-semibold tracking-tight text-foreground">{product.title}</div>
              {product.subtitle ? <div className="mt-1 line-clamp-1 text-xs text-muted-foreground">{product.subtitle}</div> : null}
            </Link>
          </div>
          <Button variant="ghost" size="icon" aria-label="Agregar a favoritos" className="h-9 w-9 rounded-full">
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="mt-4 flex items-baseline justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-foreground">{formatMoney(product.price)}</div>
            {product.compareAtPrice ? (
              <div className="mt-1 text-xs text-muted-foreground line-through">{formatMoney(product.compareAtPrice)}</div>
            ) : null}
          </div>
          <Link
            to={`/products/${product.handle}`}
            className="text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver →
          </Link>
        </div>
      </div>
    </div>
  );
}
