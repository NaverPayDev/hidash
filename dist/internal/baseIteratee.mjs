import t from "core-js-pure/features/instance/includes.js";
import { isFunction as l } from "../isFunction.mjs";
import { isNull as y } from "../isNull.mjs";
import { isPlainObject as s } from "../isPlainObject.mjs";
import { isUndefined as m } from "../isUndefined.mjs";
import { isArrayLike as d } from "./array.mjs";
function c(n, r) {
  if (!s(n) || !s(r))
    return !1;
  for (const [u, o] of Object.entries(r)) {
    const f = n[u];
    if (s(o)) {
      if (!c(f, o))
        return !1;
    } else if (f !== o)
      return !1;
  }
  return !0;
}
function j(n) {
  if (y(n) || m(n))
    return function(r) {
      return r;
    };
  if (typeof n == "string" && !t(n).call(n, "."))
    return function(r) {
      return r !== null ? r[n] : void 0;
    };
  if (typeof n == "string" || typeof n == "symbol" || typeof n == "number") {
    const r = typeof n == "string" ? n.split(".") : [n];
    return function(u) {
      let o = u;
      for (const f of r) {
        if (o === null)
          return;
        o = o[f];
      }
      return o;
    };
  }
  if (d(n) && !l(n)) {
    const [r, u] = n;
    if (typeof r == "string" && !t(r).call(r, "."))
      return (f) => f != null && f[r] === u;
    const o = typeof r == "string" ? r.split(".") : [r];
    return function(f) {
      let i = f;
      for (const p of o) {
        if (i == null)
          return !1;
        i = i[p];
      }
      return i === u;
    };
  }
  if (s(n) && !l(n))
    return function(r) {
      return s(r) ? c(r, n) : !1;
    };
  if (l(n))
    return n;
  throw new Error("Invalid iteratee");
}
export {
  j as baseIteratee
};
