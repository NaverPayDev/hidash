import { isArray as t } from "./isArray.mjs";
import { isFunction as m } from "./isFunction.mjs";
import { isMap as f } from "./isMap.mjs";
import { isNull as e } from "./isNull.mjs";
import { isObject as n } from "./isObject.mjs";
import { isSet as u } from "./isSet.mjs";
import { isString as p } from "./isString.mjs";
function S(r) {
  return e(r) ? [] : p(r) ? [...r] : t(r) ? [...r] : u(r) || f(r) ? [] : n(r) || m(r) ? Object.keys(r).map((i) => r[i]) : [];
}
export {
  S as default,
  S as values
};
