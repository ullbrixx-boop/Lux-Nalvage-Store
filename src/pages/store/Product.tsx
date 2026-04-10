import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Check, Shield, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductByHandle, products } from "@/data/catalog";
import { formatMoney } from "@/lib/money";
import { useCart } from "@/store/cart";

export default function ProductPage() {
  const { handle } = useParams<{ handle: string }>();
  const product = getProductByHandle(handle || "");
  const { addLine } = useCart();

  const [variantId, setVariantId] = useState<string | undefined>(product?.variants[0]?.id);
  const [qty, setQty] = useState(1);

  const related = useMemo(() => {
    if (!product) return [];
    return products.filter((p) => p.handle !== product.handle).slice(0, 3);
  }, [product]);

  if (!product) {
    return (
      <section className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border/70 bg-card/70 p-10">
            <div className="text-sm font-semibold text-muted-foreground">No encontrado</div>
            <h1 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground">Este producto no existe.</h1>
            <div className="mt-6">
              <Link to="/shop" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Volver al catálogo →</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-muted">
              <img
                src={product.media[0]?.src}
                alt={product.media[0]?.alt ?? product.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="max-w-xl">
              <div className="text-sm font-semibold text-muted-foreground">Lux Nalvage</div>
              <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{product.title}</h1>
              {product.subtitle ? <p className="mt-3 text-sm text-muted-foreground md:text-base">{product.subtitle}</p> : null}

              <div className="mt-6 flex items-baseline gap-3">
                <div className="text-2xl font-semibold text-foreground">{formatMoney(product.price)}</div>
                {product.compareAtPrice ? (
                  <div className="text-sm text-muted-foreground line-through">{formatMoney(product.compareAtPrice)}</div>
                ) : null}
              </div>

              <div className="mt-6 grid gap-3">
                {product.highlights.slice(0, 3).map((h) => (
                  <div key={h} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 text-foreground" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {product.variants.length > 1 ? (
                <div className="mt-8">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Variante</div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {product.variants.map((v) => (
                      <button
                        key={v.id}
                        type="button"
                        onClick={() => setVariantId(v.id)}
                        className={`rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
                          variantId === v.id
                            ? "border-foreground bg-foreground text-primary-foreground"
                            : "border-border/70 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {v.title}
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}

              <div className="mt-8 grid grid-cols-[1fr_auto] items-center gap-3">
                <div className="rounded-2xl border border-border/70 bg-card/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Cantidad</div>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      className="h-10 w-10 rounded-full border border-border/70 text-sm font-semibold text-foreground"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                    >
                      −
                    </button>
                    <div className="w-10 text-center text-sm font-semibold">{qty}</div>
                    <button
                      type="button"
                      className="h-10 w-10 rounded-full border border-border/70 text-sm font-semibold text-foreground"
                      onClick={() => setQty((q) => q + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="h-[72px] rounded-2xl px-10"
                  onClick={() => addLine(product.handle, qty, variantId)}
                >
                  Agregar al carrito
                </Button>
              </div>

              <div className="mt-6 grid gap-3 rounded-3xl border border-border/70 bg-muted/50 p-6">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Compra segura</div>
                    <div className="mt-1 text-sm text-muted-foreground">Confirmamos tu pedido y resolvemos tus dudas antes del envío.</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-5 w-5" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">Pago contra entrega</div>
                    <div className="mt-1 text-sm text-muted-foreground">Recibes y pagas. Sin fricción. Sin complicaciones.</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Descripción</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">{product.description}</p>
              </div>

              <div className="mt-10">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Especificaciones</div>
                <div className="mt-4 space-y-3">
                  {product.specs.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between gap-6 border-b border-border/60 pb-3 text-sm"
                    >
                      <span className="text-muted-foreground">{s.label}</span>
                      <span className="font-medium text-foreground">{s.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Relacionados</div>
                <div className="mt-4 grid gap-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      to={`/products/${r.handle}`}
                      className="rounded-2xl border border-border/70 bg-card/70 p-4 hover:shadow-sm transition-shadow"
                    >
                      <div className="text-sm font-semibold text-foreground">{r.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground">{formatMoney(r.price)}</div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/80 backdrop-blur-lg lg:hidden">
        <div className="container-wide flex items-center justify-between gap-4 py-3">
          <div>
            <div className="text-xs text-muted-foreground">{product.title}</div>
            <div className="text-sm font-semibold text-foreground">{formatMoney(product.price)}</div>
          </div>
          <Button onClick={() => addLine(product.handle, qty, variantId)}>Agregar</Button>
        </div>
      </div>
    </>
  );
}
