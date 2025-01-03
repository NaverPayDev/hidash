import l from "core-js-pure/features/instance/push.js";
import { baseIteratee as r } from "./internal/baseIteratee.mjs";
function m(t, c) {
  if (!t || !("length" in t))
    return [];
  const o = /* @__PURE__ */ new Map(), n = [], i = r(c);
  for (let e = 0; e < t.length; e++) {
    const s = t[e], u = i(s, e, t);
    o.has(u) || (o.set(u, !0), l(n).call(n, s));
  }
  return n;
}
export {
  m as default,
  m as uniqBy
};
