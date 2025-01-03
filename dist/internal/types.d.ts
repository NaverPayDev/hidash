export type Collection<T> = ArrayLike<T> | Record<string, T>;
export type List<T> = T[] | ArrayLike<T>;
export type Dictionary<T> = Record<string, T>;
export type NumericDictionary<T> = Record<number, T>;
export type AnyKindOfDictionary<T> = Dictionary<T> | NumericDictionary<T>;
