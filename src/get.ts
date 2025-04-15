/* eslint-disable @typescript-eslint/no-explicit-any */
function parsePath(path: string) {
    const result = []

    const regex = /([a-zA-Z_$][\w$]*)|\[\s*(-?\d+)\s*\]|\[\s*(['"])((?:\\.|(?!\3).)*?)\3\s*\]/g
    let match

    while ((match = regex.exec(path)) !== null) {
        if (match[1] !== undefined) {
            result.push(match[1])
        } else if (match[2] !== undefined) {
            result.push(Number(match[2]))
        } else if (match[4] !== undefined) {
            const unescaped = match[4].replace(/\\(["'])/g, '$1')
            result.push(unescaped)
        }
    }

    return result
}

export function get<T>(obj: unknown, path: string | symbol | (string | number)[], defaultValue?: T): T | undefined {
    try {
        if (obj == null) {
            return defaultValue
        }
        if (!path) {
            return (obj as any)[path] ?? defaultValue
        }

        if (!Array.isArray(path) && path in (obj as any)) {
            return (obj as any)[path] as T
        }

        const paths: (symbol | string | number)[] = Array.isArray(path)
            ? path
            : typeof path === 'string'
            ? parsePath(path)
            : [path]

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
