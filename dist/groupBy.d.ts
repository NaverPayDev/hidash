type PropertyName = string | number;
export declare function groupBy<T>(collection: T[] | null | undefined, iteratee: ((value: T) => PropertyName) | keyof NonNullable<T>): Record<string, T[]>;
export declare function groupBy<T extends object>(collection: T | null | undefined, iteratee?: ((value: T[keyof T]) => PropertyName) | keyof T[keyof T]): Record<string, T[keyof T][]>;
export default groupBy;
