import { Link, useSearchParams } from "react-router-dom";
import { products } from "@/data/catalog";
import { ProductCard } from "@/components/store/ProductCard";

export default function Shop() {
  const [params] = useSearchParams();
  const tag = params.get("tag");

  const visible = tag ? products.filter((p) => p.tags.includes(tag)) : products;

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Catálogo</div>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Productos</h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-base">Selección curada con enfoque en diseño, utilidad y experiencia premium.</p>
          </div>
          <div className="flex gap-2">
            <Link
              to="/shop"
              className={`rounded-full px-4 py-2 text-xs font-semibold border border-border/70 ${tag ? "text-muted-foreground hover:text-foreground" : "bg-foreground text-primary-foreground"}`}
            >
              Todo
            </Link>
            <Link
              to="/shop?tag=new"
              className={`rounded-full px-4 py-2 text-xs font-semibold border border-border/70 ${tag === "new" ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Nuevos
            </Link>
            <Link
              to="/shop?tag=featured"
              className={`rounded-full px-4 py-2 text-xs font-semibold border border-border/70 ${tag === "featured" ? "bg-foreground text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              Destacados
            </Link>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
