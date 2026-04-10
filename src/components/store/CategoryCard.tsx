import { Link } from "react-router-dom";
import type { Collection } from "@/data/catalog";
import { cn } from "@/lib/utils";

export function CategoryCard({ collection, className }: { collection: Collection; className?: string }) {
  return (
    <Link
      to={`/collections/${collection.handle}`}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-border/70 bg-card/70 backdrop-blur-sm",
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      <img
        src={collection.heroMedia.src}
        alt={collection.heroMedia.alt}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-xl p-4 -mx-2">
          <div className="font-heading text-lg font-semibold tracking-tight text-white drop-shadow-lg">{collection.title}</div>
          <div className="mt-1 text-sm text-white/90 line-clamp-2 drop-shadow-md">{collection.description}</div>
          <div className="mt-4 text-xs font-semibold text-white drop-shadow-md group-hover:text-[#D4AF37] transition-colors">Explorar →</div>
        </div>
      </div>
    </Link>
  );
}
