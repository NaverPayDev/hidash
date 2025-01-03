import { isObject as n } from "./isObject.mjs";
function i(t) {
  return n(t) ? typeof t == "function" : !1;
}
export {
  i as default,
  i as isFunction
};
