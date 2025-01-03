type List<T> = ArrayLike<T>;
type ListIterateeCustom<T, R> = (value: T, index: number, collection: List<T>) => R;
type ObjectIterateeCustom<T, R> = (value: T[keyof T], key: string, collection: T) => R;
export declare function every<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
export declare function every<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
export default every;
