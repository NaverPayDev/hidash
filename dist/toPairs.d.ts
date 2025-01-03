import { AnyKindOfDictionary } from './internal/types';
export declare function toPairs<Value, Key = Value>(object?: AnyKindOfDictionary<Value> | object | Map<Key, Value> | Set<Value>): [Key, Value][];
export default toPairs;
