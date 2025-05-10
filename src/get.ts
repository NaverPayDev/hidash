/* eslint-disable @typescript-eslint/no-explicit-any */
export function get<T>(obj: unknown, path: string | symbol | (string | number)[], defaultValue?: T): T | undefined {
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
