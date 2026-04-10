import { Link, useParams } from "react-router-dom";
import { getCollectionByHandle, getProductsByCollection } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";

export default function CollectionPage() {
  const { handle } = useParams<{ handle: string }>();
  const collection = getCollectionByHandle(handle || "");

  if (!collection) {
    return (
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border/70 bg-card/70 p-10">
            <div className="text-sm font-semibold text-muted-foreground">No encontrada</div>
            <h1 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">Esta colección no existe.</h1>
            <div className="mt-6">
              <Link to="/shop" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Volver al catálogo →</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const items = getProductsByCollection(collection.handle);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-end">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Colección</div>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{collection.title}</h1>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">{collection.description}</p>
            <div className="mt-6">
              <Link to="/shop" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Ver todo el catálogo →</Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-muted">
            <img src={collection.heroMedia.src} alt={collection.heroMedia.alt} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
