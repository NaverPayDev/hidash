import { ListIterateeCustom, ObjectIterateeCustom } from './internal/baseIteratee';
import { List } from './internal/types';
export declare function some<T>(collection: List<T> | null | undefined, predicate?: ListIterateeCustom<T, boolean>): boolean;
export declare function some<T extends object>(collection: T | null | undefined, predicate?: ObjectIterateeCustom<T, boolean>): boolean;
export default some;
