export interface Abbr {
  abbr: (this: this) => string;
}

export function withOrdinal<T extends Abbr>(
  item: T,
  ordinal: number
): T & { ordinal: number } {
  return {
    ...item,
    ordinal,
    abbr: () => `${item.abbr()}${ordinal}`,
  };
}
