import isArray from './isArray'

const rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g
const reEscapeChar = /\\(\\)?/g
const pathCache = new Map<string, (string | number)[]>()

function isObjectLike(value: unknown): value is object {
    return value !== null && typeof value === 'object'
}

function isNumericKey(str: string): boolean {
    return /^-?\d+$/.test(str)
}

function complexStringToPath(path: string): (string | number)[] {
    const cached = pathCache.get(path)
    if (cached) {
        return cached
    }

    const result: (string | number)[] = []

    // 선행 '.' 처리
    if (path[0] === '.') {
        result.push('')
    }

    path.replace(rePropName, (match, number, quote, subStr) => {
        let key: string | number = match
        let subString = subStr
        if (quote) {
            subString = subString ?? ''
            key = subString.replace(reEscapeChar, '$1')
        } else if (number !== undefined) {
            key = Number(number)
        } else if (isNumericKey(key)) {
            key = Number(key)
        }
        result.push(key)
        return ''
    })

    pathCache.set(path, result)
    return result
}

function castPath(path: string | symbol | (string | number)[]): (string | number | symbol)[] {
    if (isArray(path)) {
        return path
    }
    if (typeof path === 'symbol') {
        return [path]
    }

    if (path.includes('[') || path.includes(']') || path.includes('"') || path.includes("'")) {
        return complexStringToPath(path)
    }

    return path === '' ? [''] : path.split('.')
}

function baseGet(obj: unknown, path: (string | number | symbol)[]): unknown {
    let current = obj
    for (let i = 0; i < path.length; i++) {
        if (!isObjectLike(current)) {
            return undefined
        }
        const key = path[i]
        if (!Object.prototype.hasOwnProperty.call(current, key)) {
            return undefined
        }
        current = (current as Record<string | number | symbol, unknown>)[key]
    }
    return current
}

export function get<T = unknown>(
    object: unknown,
    path: string | symbol | (string | number)[],
    defaultValue?: T,
): T | undefined {
    if (object == null) {
        return defaultValue
    }

    const arrPath = castPath(path)
    const result = baseGet(object, arrPath)
    return result === undefined ? defaultValue : (result as T)
}

export default get
