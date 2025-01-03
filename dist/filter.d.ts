import { ListIterateeCustom, ListIteratorTypeGuard, ObjectIterateeCustom, ObjectIteratorTypeGuard } from './internal/baseIteratee';
import { List } from './internal/types';
export declare function filter<T extends Record<string, unknown>>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): T[keyof T][];
export declare function filter<T extends Record<string, unknown>, S extends T[keyof T]>(collection: T | null | undefined, predicate: ObjectIteratorTypeGuard<T, S>): S[];
export declare function filter(collection: string | null | undefined, predicate?: ListIterateeCustom<string, boolean>): string[];
export declare function filter<T, S extends T>(collection: List<T> | null | undefined, predicate: ListIteratorTypeGuard<T, S>): S[];
export declare function filter<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): T[];
export default filter;
