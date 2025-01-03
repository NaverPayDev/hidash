import { isArray as n } from "./isArray.mjs";
import { isEmpty as m } from "./isEmpty.mjs";
import { isMap as f } from "./isMap.mjs";
import { isPlainObject as p } from "./isPlainObject.mjs";
import { isSet as s } from "./isSet.mjs";
import { isString as u } from "./isString.mjs";
function y(r) {
  return !r || m(r) ? [] : u(r) ? r.split("").map((i, t) => [String(t), i]) : n(r) ? r.map((i, t) => [String(t), i]) : p(r) ? Object.entries(r) : f(r) ? [...r.entries()] : s(r) ? [...r.entries()] : [];
}
export {
  y as default,
  y as toPairs
};
