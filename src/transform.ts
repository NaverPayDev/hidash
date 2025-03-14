import isArray from './isArray'

type Keys<T> = T extends readonly unknown[] ? number : keyof T
type ValueOf<T> = T extends readonly (infer U)[] ? U : T[keyof T]

export function transform<T extends readonly unknown[] | Record<PropertyKey, unknown>, R>(
    object: T | null | undefined,
    iteratee: (acc: R, value: ValueOf<T>, key: Keys<T>, obj: T) => boolean | void,
    accumulator?: R,
): R {
    const obj = Object(object) as T
    const isArr = isArray(obj)
    const acc: R = accumulator !== undefined ? accumulator : ((isArr ? [] : {}) as unknown as R)

    if (isArr) {
        const arr = obj as unknown[]
        const size = arr.length
        for (let i = 0; i < size; i++) {
            const key = i as Keys<T>
            const value = arr[i] as ValueOf<T>
            const result = iteratee(acc, value, key, obj)
            if (result === false) {
                break
            }
        }
    } else {
        const objKeys = Object.keys(obj) as Keys<T>[]
        const rec = obj as Record<PropertyKey, unknown>
        for (let i = 0; i < objKeys.length; i++) {
            const key = objKeys[i]
            const value = rec[key as keyof typeof rec] as ValueOf<T>
            const result = iteratee(acc, value, key, obj)
            if (result === false) {
                break
            }
        }
    }

    return acc
}

export default transform
