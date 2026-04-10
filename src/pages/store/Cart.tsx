import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products } from "@/data/catalog";
import { formatMoney } from "@/lib/money";
import { getCartSubtotal, useCart } from "@/store/cart";
import { storeConfig } from "@/data/storeConfig";

export default function CartPage() {
  const { lines, setQuantity, removeLine } = useCart();
  const index = new Map(products.map((p) => [p.handle, p] as const));
  const subtotal = getCartSubtotal(lines, index);

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Carrito</div>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Tu selección</h1>
          </div>
          <Link to="/shop" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Seguir comprando →</Link>
        </div>

        {lines.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-border/70 bg-card/70 p-10">
            <div className="text-sm font-semibold text-muted-foreground">Carrito vacío</div>
            <div className="mt-2 font-heading text-xl font-semibold tracking-tight text-foreground">Aún no has agregado productos.</div>
            <div className="mt-6">
              <Button>
                <Link to="/shop">Ir al catálogo</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div className="space-y-4">
              {lines.map((l) => {
                const product = index.get(l.productHandle);
                if (!product) return null;

                return (
                  <div key={`${l.productHandle}-${l.variantId ?? "default"}`} className="rounded-3xl border border-border/70 bg-card/70 p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="min-w-0">
                        <div className="font-heading text-base font-semibold tracking-tight text-foreground">{product.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">{formatMoney(product.price)}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-24">
                          <Input
                            value={String(l.quantity)}
                            inputMode="numeric"
                            onChange={(e) => {
                              const q = Number(e.target.value);
                              if (Number.isFinite(q)) setQuantity(l.productHandle, q, l.variantId);
                            }}
                          />
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          aria-label="Eliminar"
                          onClick={() => removeLine(l.productHandle, l.variantId)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-3xl border border-border/70 bg-muted/50 p-6 h-fit">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resumen</div>
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-semibold text-foreground">{formatMoney({ amount: subtotal, currencyCode: storeConfig.currencyCode })}</span>
              </div>
              <div className="mt-3 text-sm text-muted-foreground">Pago contra entrega. Confirmamos tu pedido antes del envío.</div>
              <div className="mt-6">
                <Button className="w-full" size="lg">
                  <Link to="/checkout">Continuar</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
