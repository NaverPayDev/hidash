import { ValueIteratee } from './internal/baseIteratee';
import { List } from './internal/types';
export declare function uniqBy<T>(array: List<T> | null | undefined, iteratee: ValueIteratee<T>): T[];
export default uniqBy;
