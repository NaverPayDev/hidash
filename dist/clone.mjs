import o from "core-js-pure/features/instance/flags.js";
import { isArray as f } from "./isArray.mjs";
import { isObject as i } from "./isObject.mjs";
function b(t) {
  if (t === null || typeof t != "object")
    return t;
  if (f(t))
    return t.slice();
  if (t instanceof Date)
    return new Date(t.getTime());
  if (t instanceof RegExp)
    return new RegExp(t.source, o(t));
  if (ArrayBuffer.isView(t) && !(t instanceof DataView)) {
    const r = t.constructor;
    return new r(t.buffer.slice(0));
  }
  if (t instanceof ArrayBuffer)
    return t.slice(0);
  if (t instanceof Map)
    return new Map(t);
  if (t instanceof Set)
    return new Set(t);
  if (i(t)) {
    const r = Object.create(Object.getPrototypeOf(t));
    Object.assign(r, t);
    const e = Object.getOwnPropertySymbols(t);
    return e.length && e.forEach((n) => {
      Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
    }), r;
  }
  return {};
}
export {
  b as clone,
  b as default
};
