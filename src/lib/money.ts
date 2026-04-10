export type Money = {
  amount: number;
  currencyCode: "USD" | "CLP" | "COP" | "MXN" | "EUR";
};

export function formatMoney(money: Money) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: money.currencyCode,
      maximumFractionDigits: money.currencyCode === "CLP" ? 0 : 2,
    }).format(money.amount);
  } catch {
    return `${money.amount} ${money.currencyCode}`;
  }
}
