import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Truck, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { collections, products } from "@/data/catalog";
import { storeConfig } from "@/data/storeConfig";
import { ProductCard } from "@/components/store/ProductCard";
import { CategoryCard } from "@/components/store/CategoryCard";

function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const featured = products.filter((p) => p.tags.includes("featured")).slice(0, 6);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container-wide pt-14 pb-10 md:pt-20 md:pb-14">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: [0.2, 0.8, 0.2, 1] }}
                className="inline-flex items-center rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-muted-foreground backdrop-blur"
              >
                {storeConfig.brand.tagline}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
                className="mt-6 font-heading text-4xl font-semibold tracking-tight text-foreground sm:text-5xl"
              >
                Selección premium para una vida moderna.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12, ease: [0.2, 0.8, 0.2, 1] }}
                className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                Objetos esenciales, limpios y bien elegidos. Compra con confianza: pago contra entrega y confirmación rápida.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18, ease: [0.2, 0.8, 0.2, 1] }}
                className="mt-8 flex flex-col gap-3 sm:flex-row"
              >
                <Button size="lg" onClick={() => {}}>
                  <Link to="/shop">Comprar ahora</Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link to="/collections/featured">Ver destacados</Link>
                </Button>
              </motion.div>

              <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Truck, label: "Envío disponible" },
                  { icon: CheckCircle2, label: "Pago contra entrega" },
                  { icon: Shield, label: "Compra segura" },
                  { icon: MessageCircle, label: "Soporte rápido" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <item.icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative"
            >
              <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-border/70 bg-card/70 backdrop-blur">
                <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=900&fit=crop" alt="Lux Nalvage" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="pointer-events-none absolute -bottom-5 -left-5 hidden h-28 w-28 rounded-full bg-secondary/20 blur-2xl md:block" />
              <div className="pointer-events-none absolute -top-5 -right-8 hidden h-36 w-36 rounded-full bg-foreground/10 blur-2xl md:block" />
            </motion.div>
          </div>
        </div>
      </section>

      <MotionSection className="section-padding">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Pago contra entrega",
                desc: "Paga al recibir. Confirmamos tu compra y coordinamos la entrega.",
              },
              {
                title: "Selección curada",
                desc: "Menos ruido. Mejores opciones. Productos elegidos por diseño y utilidad.",
              },
              {
                title: "Soporte que responde",
                desc: "Te acompañamos antes y después de la compra con un trato claro.",
              },
            ].map((b) => (
              <div key={b.title} className="rounded-3xl border border-border/70 bg-card/70 p-7 backdrop-blur-sm">
                <div className="font-heading text-base font-semibold tracking-tight text-foreground">{b.title}</div>
                <div className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-padding pt-0">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-muted-foreground">Colecciones</div>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Explora por intención</h2>
            </div>
            <Link className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground md:block" to="/shop">
              Ver todo →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {collections.slice(0, 3).map((c) => (
              <CategoryCard key={c.id} collection={c} className="h-[320px]" />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-padding">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="text-sm font-semibold text-muted-foreground">Destacados</div>
              <h2 className="mt-2 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Lo esencial, mejor elegido</h2>
            </div>
            <Link className="hidden text-sm font-semibold text-muted-foreground hover:text-foreground md:block" to="/collections/featured">
              Ver destacados →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-padding">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-3xl border border-border/70 bg-card/70 p-10 backdrop-blur-sm">
              <div className="text-sm font-semibold text-muted-foreground">Sobre Lux Nalvage</div>
              <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight text-foreground md:text-3xl">Una marca que se siente bien pensada.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Creemos en el minimalismo estratégico: productos claros, experiencia simple y comunicación honesta. Sin ruido. Sin exageraciones.
              </p>
              <div className="mt-6">
                <Button variant="outline">
                  <Link to="/about">Conocer la marca</Link>
                </Button>
              </div>
            </div>
            <div className="rounded-3xl border border-border/70 bg-muted p-10">
              <div className="text-sm font-semibold text-muted-foreground">Cómo funciona</div>
              <h3 className="mt-3 font-heading text-xl font-semibold tracking-tight text-foreground">Compra en 4 pasos</h3>
              <div className="mt-6 space-y-4">
                {[
                  "Elige tu producto",
                  "Haz tu pedido online",
                  "Confirmamos tu compra",
                  "Recibes y pagas contra entrega",
                ].map((step, i) => (
                  <div key={step} className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background text-sm font-semibold text-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground">{step}</div>
                      <div className="mt-1 text-sm text-muted-foreground">Simple, claro y sin fricción.</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </MotionSection>

      <MotionSection className="section-padding">
        <div className="container-wide">
          <div className="rounded-3xl border border-border/70 bg-foreground p-10 text-primary-foreground md:p-14">
            <div className="max-w-2xl">
              <div className="text-sm font-semibold text-primary-foreground/70">Listo para elegir mejor</div>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-tight md:text-4xl">Descubre tu próxima pieza esencial.</h2>
              <p className="mt-4 text-primary-foreground/70">Explora el catálogo completo y compra con pago contra entrega.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-white text-black hover:bg-white/90">
                  <Link to="/shop">Ir al catálogo</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white/40 text-white hover:bg-white/10">
                  <Link to="/help">Ver preguntas frecuentes</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </MotionSection>
    </>
  );
}
