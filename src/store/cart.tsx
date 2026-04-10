import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Money } from "@/lib/money";
import { formatMoney } from "@/lib/money";

export type CartLine = {
  productHandle: string;
  variantId?: string;
  quantity: number;
};

type CartState = {
  lines: CartLine[];
};

type CartContextValue = {
  lines: CartLine[];
  setQuantity: (productHandle: string, quantity: number, variantId?: string) => void;
  addLine: (productHandle: string, quantity?: number, variantId?: string) => void;
  removeLine: (productHandle: string, variantId?: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "luxnalvage_cart_v1";

function lineKey(productHandle: string, variantId?: string) {
  return `${productHandle}::${variantId ?? "default"}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CartState>({ lines: [] });

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw) as CartState;
      if (!parsed?.lines || !Array.isArray(parsed.lines)) return;
      setState({ lines: parsed.lines });
    } catch {
      return;
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state]);

  const value = useMemo<CartContextValue>(() => {
    return {
      lines: state.lines,
      setQuantity: (productHandle: string, quantity: number, variantId?: string) => {
        setState((prev) => {
          const nextLines = prev.lines
            .map((l) =>
              lineKey(l.productHandle, l.variantId) === lineKey(productHandle, variantId)
                ? { ...l, quantity }
                : l,
            )
            .filter((l) => l.quantity > 0);

          return { lines: nextLines };
        });
      },
      addLine: (productHandle: string, quantity: number = 1, variantId?: string) => {
        setState((prev) => {
          const key = lineKey(productHandle, variantId);
          const existing = prev.lines.find((l) => lineKey(l.productHandle, l.variantId) === key);
          if (existing) {
            return {
              lines: prev.lines.map((l) =>
                lineKey(l.productHandle, l.variantId) === key
                  ? { ...l, quantity: l.quantity + quantity }
                  : l,
              ),
            };
          }
          return { lines: [...prev.lines, { productHandle, variantId, quantity }] };
        });
      },
      removeLine: (productHandle: string, variantId?: string) => {
        setState((prev) => {
          const key = lineKey(productHandle, variantId);
          return { lines: prev.lines.filter((l) => lineKey(l.productHandle, l.variantId) !== key) };
        });
      },
      clear: () => setState({ lines: [] }),
    };
  }, [state.lines]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function getCartCount(lines: CartLine[]) {
  return lines.reduce((acc, l) => acc + l.quantity, 0);
}

export function getCartSubtotal(
  lines: CartLine[],
  productIndex: Map<string, { price: Money }>,
) {
  return lines.reduce((acc, l) => {
    const product = productIndex.get(l.productHandle);
    if (!product) return acc;
    return acc + product.price.amount * l.quantity;
  }, 0);
}

export function moneyFromAmount(amount: number, currencyCode: Money["currencyCode"]) {
  return { amount, currencyCode };
}

export function formatAmount(amount: number, currencyCode: Money["currencyCode"]) {
  return formatMoney({ amount, currencyCode });
}
