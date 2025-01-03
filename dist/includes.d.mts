export type Dictionary<T> = Record<string, T>;
export type NumericDictionary<T> = Record<number, T>;
export declare function includes<T>(collection: Dictionary<T> | NumericDictionary<T> | null | undefined, target: T, fromIndex?: number): boolean;
export default includes;
