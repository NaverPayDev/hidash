import { List } from './types';
type PropertyName = string | number | symbol;
type PartialShallow<T> = {
    [P in keyof T]?: T[P] extends object ? object : T[P];
};
type IterateeShorthand<T> = PropertyName | [PropertyName, any] | PartialShallow<T> | undefined | null;
export type ListIterator<T, TResult> = (value: T, index: number, collection: ArrayLike<T>) => TResult;
export type ListIteratee<T> = ListIterator<T, unknown> | IterateeShorthand<T>;
export type ListIterateeCustom<T, TResult> = ListIterator<T, TResult> | IterateeShorthand<T>;
export type ListIteratorTypeGuard<T, S extends T> = (value: T, index: number, collection: List<T>) => value is S;
export type ValueIteratee<T> = ((value: T) => unknown) | IterateeShorthand<T>;
export type ObjectIterator<T, TResult> = (value: T[keyof T], key: string, collection: T) => TResult;
export type ObjectIteratee<TObject> = ObjectIterator<TObject, unknown> | IterateeShorthand<TObject[keyof TObject]>;
export type ObjectIterateeCustom<TObject, TResult> = ObjectIterator<TObject, TResult> | IterateeShorthand<TObject[keyof TObject]>;
export type ObjectIteratorTypeGuard<TObject, S extends TObject[keyof TObject]> = (value: TObject[keyof TObject], key: string, collection: TObject) => value is S;
export declare function baseIteratee<T, TResult>(iteratee: ObjectIterateeCustom<T, TResult>): ObjectIterator<T, TResult>;
export declare function baseIteratee<T, TResult>(iteratee: ListIterateeCustom<T, TResult>): ListIterator<T, TResult>;
export {};
