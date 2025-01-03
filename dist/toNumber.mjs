import o from "core-js-pure/features/instance/trim.js";
import { isObject as s } from "./isObject.mjs";
import { isSymbol as c } from "./isSymbol.mjs";
function m(r) {
  return r && o(r).call(r);
}
const e = NaN, u = /^[-+]0x[0-9a-f]+$/i, p = /^0b[01]+$/i, y = /^0o[0-7]+$/i, i = Number.parseInt;
function f(r) {
  if (typeof r == "number")
    return r;
  if (typeof r == "boolean")
    return r ? 1 : 0;
  if (r === null)
    return 0;
  if (r === void 0)
    return e;
  if (typeof r == "string") {
    const t = m(r);
    if (p.test(t))
      return i(t.slice(2), 2);
    if (y.test(t))
      return i(t.slice(2), 8);
    if (u.test(t))
      return e;
    const n = +t;
    return isNaN(n) ? e : n;
  }
  if (c(r))
    return e;
  if (Array.isArray(r))
    return r.length === 0 ? 0 : r.length === 1 ? f(r[0]) : e;
  if (s(r)) {
    const t = r.valueOf();
    if (typeof t == "number")
      return t;
    if (typeof t == "string")
      return f(t);
  }
  return e;
}
export {
  f as default,
  f as toNumber
};
