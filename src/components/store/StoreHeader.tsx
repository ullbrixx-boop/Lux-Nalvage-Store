import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { storeConfig } from "@/data/storeConfig";
import { useCart, getCartCount } from "@/store/cart";
import { products, collections } from "@/data/catalog";

const nav = [
  { label: "Inicio", href: "/" },
  { label: "Catálogo", href: "/shop" },
  { label: "Nuevos", href: "/collections/new" },
  { label: "Destacados", href: "/collections/featured" },
  { label: "Sobre", href: "/about" },
  { label: "Ayuda", href: "/help" },
];

export function StoreHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { lines } = useCart();
  const cartCount = useMemo(() => getCartCount(lines), [lines]);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
    setQuery("");
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return { products: products.slice(0, 6), collections: collections.slice(0, 4) };
    return {
      products: products.filter((p) => p.title.toLowerCase().includes(q)).slice(0, 8),
      collections: collections.filter((c) => c.title.toLowerCase().includes(q)).slice(0, 6),
    };
  }, [query]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b border-border/50 backdrop-blur-xl transition-colors",
        scrolled ? "bg-background/80" : "bg-background/60",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú"
            className="lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/logo-icon.png" 
              alt={storeConfig.brand.name}
              className="h-10 w-10 object-contain"
              loading="eager"
            />
            <span className="font-heading text-[15px] font-semibold tracking-tight">{storeConfig.brand.name}</span>
          </Link>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          {nav.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                location.pathname === item.href && "text-foreground",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="ghost" size="icon" aria-label="Buscar" onClick={() => setSearchOpen((v) => !v)}>
            <Search className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cuenta" onClick={() => navigate("/account")}>
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Carrito" onClick={() => navigate("/cart")}>
            <span className="relative">
              <ShoppingBag className="h-5 w-5" />
              {cartCount > 0 ? (
                <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-4 items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-semibold text-secondary-foreground">
                  {cartCount}
                </span>
              ) : null}
            </span>
          </Button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-border/70 bg-background/90 backdrop-blur lg:hidden">
          <div className="container-wide py-4">
            <div className="grid gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                    location.pathname === item.href
                      ? "bg-accent text-accent-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {searchOpen ? (
        <div className="border-t border-border/70 bg-background/90 backdrop-blur">
          <div className="container-wide py-5">
            <div className="grid gap-4 lg:grid-cols-[1fr_0.5fr]">
              <div>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar productos o colecciones"
                  className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <div className="mt-4 grid gap-2">
                  {results.products.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => navigate(`/products/${p.handle}`)}
                      className="flex w-full items-center justify-between rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-left"
                    >
                      <span className="text-sm font-semibold text-foreground">{p.title}</span>
                      <span className="text-xs font-semibold text-muted-foreground">Ver →</span>
                    </button>
                  ))}
                </div>
              </div>
              <div className="hidden lg:block">
                <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Colecciones</div>
                <div className="mt-4 grid gap-2">
                  {results.collections.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => navigate(`/collections/${c.handle}`)}
                      className="rounded-xl border border-border/70 bg-card/70 px-4 py-3 text-left"
                    >
                      <div className="text-sm font-semibold text-foreground">{c.title}</div>
                      <div className="mt-1 text-sm text-muted-foreground line-clamp-1">{c.description}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
