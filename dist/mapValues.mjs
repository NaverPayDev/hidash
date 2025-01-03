import c from "core-js-pure/features/instance/reduce.js";
import { isObject as u } from "./isObject.mjs";
function l(r) {
  if (typeof r == "string") {
    const n = r.split(".");
    return function(e) {
      return c(n).call(n, (s, o) => s && s[o], e);
    };
  }
  return r;
}
function p(r) {
  return r === String || r === Number || r === Boolean;
}
function f(r) {
  if (Array.isArray(r))
    return r.map(f);
  if (u(r)) {
    const n = {};
    for (const t in r)
      Object.prototype.hasOwnProperty.call(r, t) && (n[t] = f(r[t]));
    return n;
  }
  return r;
}
function d(r, n) {
  if (r == null)
    return {};
  const t = {}, e = p(n), s = !e && n ? l(n) : null;
  for (const o in r)
    if (Object.prototype.hasOwnProperty.call(r, o)) {
      const i = r[o];
      n == null ? t[o] = u(i) || Array.isArray(i) ? f(i) : i : e ? t[o] = n(i) : s && (t[o] = s(i));
    }
  return t;
}
export {
  d as default,
  d as mapValues
};
