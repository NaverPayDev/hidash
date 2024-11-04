type PropertyPath = string | string[]

const reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
const reIsPlainProp = /^\w*$/

function isKey(value: PropertyPath, object: unknown): boolean {
    if (Array.isArray(value)) {
        return false
    }
    if (typeof value !== 'string') {
        return false
    }
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || (object != null && value in Object(object))
}

function castPath(value: PropertyPath): string[] {
    if (Array.isArray(value)) {
        return [...value]
    }
    return value.split('.')
}

function hasPath(object: unknown, path: PropertyPath): boolean {
    if (object == null) {
        return false
    }

    const pathArray = isKey(path, object) ? [path as string] : castPath(path)

    let currentObject: unknown = object

    for (let i = 0; i < pathArray.length; i++) {
        const key = pathArray[i]

        if (
            currentObject == null ||
            typeof currentObject !== 'object' ||
            typeof key !== 'string' ||
            !Object.prototype.hasOwnProperty.call(currentObject, key)
        ) {
            return false
        }

        currentObject = (currentObject as Record<string, unknown>)[key]

        if (i === pathArray.length - 1) {
            return true
        }
    }

    return true
}

export function has(object: unknown, path: PropertyPath): boolean {
    if (path == null || (Array.isArray(path) && !path.length)) {
        return false
    }

    if (typeof path === 'string') {
        if (!path || path === '.' || path === '..') {
            return false
        }

        if (!path.includes('.')) {
            return object != null && typeof object === 'object' && Object.prototype.hasOwnProperty.call(object, path)
        }
    } else if (!path.every((segment) => typeof segment === 'string')) {
        return false
    }

    return hasPath(object, path)
}

export default has
