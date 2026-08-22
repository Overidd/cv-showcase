type ClassValue =
  | string
  | false
  | null
  | undefined
  | Record<string, boolean>;

export const cx = (...classes: ClassValue[]): string => {
  return classes
    .flatMap((value) => {
      if (!value) return [];

      if (typeof value === 'string') {
        return value.split(/\s+/);
      }

      return Object.entries(value)
        .filter(([, condition]) => condition)
        .map(([className]) => className);
    })
    .filter(Boolean)
    .join(' ');
}