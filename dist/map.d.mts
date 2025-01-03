import { ListIterator } from './internal/baseIteratee';
export declare function map<T, R>(collection: ArrayLike<T> | null | undefined, iteratee: ListIterator<T, R>): R[];
export default map;
