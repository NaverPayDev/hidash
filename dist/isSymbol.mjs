import { SYMBOL_TAG as o } from "./internal/to-string-tags.mjs";
function p(t) {
  return typeof t == "symbol" || typeof t == "object" && t !== null && Object.prototype.toString.call(t) === o;
}
export {
  p as default,
  p as isSymbol
};
