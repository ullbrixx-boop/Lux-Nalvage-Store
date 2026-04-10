import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { products } from "@/data/catalog";
import { formatMoney } from "@/lib/money";
import { getCartSubtotal, useCart } from "@/store/cart";
import { storeConfig } from "@/data/storeConfig";

function createOrderId() {
  const ts = Date.now().toString(36).toUpperCase();
  const rnd = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `LN-${ts}-${rnd}`;
}

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { lines, clear } = useCart();
  const index = useMemo(() => new Map(products.map((p) => [p.handle, p] as const)), []);
  const subtotal = getCartSubtotal(lines, index);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  const canSubmit = lines.length > 0 && name.trim() && phone.trim() && city.trim() && address.trim();

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-sm font-semibold text-muted-foreground">Checkout</div>
            <h1 className="mt-2 font-heading text-3xl font-semibold tracking-tight text-foreground md:text-4xl">Finalizar compra</h1>
          </div>
          <Link to="/cart" className="text-sm font-semibold text-muted-foreground hover:text-foreground">Volver al carrito →</Link>
        </div>

        {lines.length === 0 ? (
          <div className="mt-10 rounded-3xl border border-border/70 bg-card/70 p-10">
            <div className="text-sm font-semibold text-muted-foreground">Carrito vacío</div>
            <div className="mt-2 font-heading text-xl font-semibold tracking-tight text-foreground">Agrega un producto para continuar.</div>
            <div className="mt-6">
              <Button>
                <Link to="/shop">Ir al catálogo</Link>
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_0.7fr]">
            <div className="rounded-3xl border border-border/70 bg-card/70 p-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Datos de entrega</div>
              <div className="mt-6 grid gap-4">
                <div>
                  <div className="text-sm font-semibold text-foreground">Nombre completo</div>
                  <Input value={name} onChange={(e) => setName(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Teléfono</div>
                  <Input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2" inputMode="tel" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Ciudad</div>
                  <Input value={city} onChange={(e) => setCity(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Dirección</div>
                  <Input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-2" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Notas (opcional)</div>
                  <Textarea value={notes} onChange={(e) => setNotes(e.target.value)} className="mt-2" />
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-border/70 bg-muted/50 p-5">
                <div className="text-sm font-semibold text-foreground">Pago contra entrega</div>
                <div className="mt-2 text-sm text-muted-foreground">Confirmamos tu compra antes del envío. Pagas al recibir.</div>
              </div>

              <div className="mt-8">
                <Button
                  size="lg"
                  className="w-full"
                  disabled={!canSubmit}
                  onClick={() => {
                    const orderId = createOrderId();
                    clear();
                    navigate("/thank-you", {
                      state: {
                        orderId,
                        name,
                        phone,
                        city,
                        address,
                        notes,
                      },
                    });
                  }}
                >
                  Confirmar pedido
                </Button>
              </div>
            </div>

            <div className="h-fit rounded-3xl border border-border/70 bg-muted/50 p-6">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resumen</div>
              <div className="mt-5 space-y-3">
                {lines.map((l) => {
                  const product = index.get(l.productHandle);
                  if (!product) return null;
                  return (
                    <div key={`${l.productHandle}-${l.variantId ?? "default"}`} className="flex items-start justify-between gap-6">
                      <div>
                        <div className="text-sm font-semibold text-foreground">{product.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">Cantidad: {l.quantity}</div>
                      </div>
                      <div className="text-sm font-semibold text-foreground">
                        {formatMoney({
                          amount: product.price.amount * l.quantity,
                          currencyCode: product.price.currencyCode,
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-border/70 pt-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-semibold text-foreground">{formatMoney({ amount: subtotal, currencyCode: storeConfig.currencyCode })}</span>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">Envío: se confirma al validar disponibilidad.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
