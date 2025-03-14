import {Many, PropertyPath} from './internal/types'
import isArray from './isArray'

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

function castPath(value: Many<string | number | symbol>): string[] {
    if (Array.isArray(value)) {
        return value.map(String)
    }
    if (typeof value === 'string') {
        return value.split('.')
    }
    return [String(value)]
}

function hasPath(object: unknown, path: PropertyPath): boolean {
    if (object == null) {
        return false
    }

    const pathArray = isKey(path, object) ? [path as string] : castPath(path)
    const pathArrayLength = pathArray.length

    let currentObject: unknown = object

    for (let i = 0; i < pathArrayLength; i++) {
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

/**
 * @description https://unpkg.com/browse/lodash.has@4.5.2/index.js
 */
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
    } else if (isArray(path) && !path.every((segment) => typeof segment === 'string')) {
        return false
    }

    return hasPath(object, path)
}

export default has
