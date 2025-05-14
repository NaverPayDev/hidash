/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @description
 * Gets the property value at path of object.
 * DefaultValue is used if it is not found at path.
 * excluded patterns 'a.b.c' and 'are[4][0]'
 *
 * @param {Object|Array} object - object to get.
 * @param {String} path - path of the property to get.
 * @param defaultValue - DefaultValue is used if it is not found at path.
 *
 * @returns Returns the value at path of object.
 */
export function get<T>(object: unknown, path: string | symbol | (string | number)[], defaultValue?: T): T | undefined {
    const obj = object
    try {
        if (obj == null) {
            return defaultValue
        }
        if (!path) {
            return (obj as any)[path] ?? defaultValue
        }

        const paths: (symbol | string | number)[] = Array.isArray(path) ? path : [path]

        let result: any = obj

        for (const p of paths) {
            if (p in result) {
                result = result[p]
            } else {
                return defaultValue
            }
        }

        return result as T
    } catch {
        return defaultValue
    }
}

export default get
