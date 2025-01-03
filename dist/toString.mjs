import { isArray as n } from "./isArray.mjs";
import { isString as i } from "./isString.mjs";
import { isSymbol as o } from "./isSymbol.mjs";
function f(t) {
  return t == null ? "" : i(t) ? t : n(t) ? t.length === 0 ? "" : t.map((r) => r === null ? "null" : r === void 0 ? "undefined" : f(r)).join(",") : o(t) ? t.toString() : typeof t == "object" ? typeof t.toString == "function" && t.toString !== Object.prototype.toString ? t.toString() : Object.prototype.toString.call(t) : typeof t == "number" && Object.is(t, -0) ? "-0" : String(t);
}
export {
  f as default,
  f as toString
};
