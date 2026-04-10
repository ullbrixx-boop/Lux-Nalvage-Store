import { Link } from "react-router-dom";
import { storeConfig } from "@/data/storeConfig";

export function StoreFooter() {
  return (
    <footer className="border-t border-border/70 bg-background">
      <div className="container-wide py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/logo-icon.png" 
                alt={storeConfig.brand.name}
                className="h-8 w-8 object-contain"
                loading="lazy"
              />
              <span className="font-heading text-base font-semibold tracking-tight">{storeConfig.brand.name}</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">{storeConfig.brand.description}</p>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tienda</div>
            <div className="mt-4 space-y-2">
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/shop">Catálogo</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/collections/new">Nuevos</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/collections/featured">Destacados</Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Soporte</div>
            <div className="mt-4 space-y-2">
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/help">Ayuda / FAQ</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/track">Seguimiento</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/contact">Contacto</Link>
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Políticas</div>
            <div className="mt-4 space-y-2">
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/policies/shipping">Envíos</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/policies/returns">Cambios y devoluciones</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/policies/privacy">Privacidad</Link>
              <Link className="block text-sm text-foreground/80 hover:text-foreground" to="/policies/terms">Términos</Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border/70 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="text-xs text-muted-foreground">© {new Date().getFullYear()} {storeConfig.brand.name}. Todos los derechos reservados.</div>
          <div className="text-xs text-muted-foreground">Pago contra entrega · Compra segura</div>
        </div>
      </div>
    </footer>
  );
}
