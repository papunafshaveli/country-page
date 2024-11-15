export const formatValueToString = (
  value:
    | string
    | string[]
    | { [key: string]: { name: string; symbol: string } }
    | { [key: string]: string }
) => {
  if (Array.isArray(value)) {
    return value.join(", ");
  } else if (typeof value === "object" && value !== null) {
    return (
      Object.entries(value)
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        .map(([key, currency]) =>
          typeof currency === "object" && currency.name && currency.symbol
            ? `${currency.name} (${currency.symbol})`
            : currency
        )
        .join(", ")
    );
  }
  return value || "N/A";
};
