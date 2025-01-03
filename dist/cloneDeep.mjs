import a from "core-js-pure/features/instance/push.js";
import { WEAK_MAP_TAG as i, WEAK_SET_TAG as u, FUNCTION_TAG as p } from "./internal/to-string-tags.mjs";
import { isArray as l } from "./isArray.mjs";
function h(f) {
  const c = /* @__PURE__ */ new WeakSet();
  function n(t) {
    const o = Object.prototype.toString.call(t);
    if (o === i || o === u || o === p)
      return {};
    if (t === null || typeof t != "object")
      return t;
    if (c.has(t))
      return {};
    if (c.add(t), l(t)) {
      const e = [];
      return t.forEach((r) => {
        a(e).call(e, n(r));
      }), e;
    }
    if (t instanceof Map) {
      const e = /* @__PURE__ */ new Map();
      return t.forEach((r, s) => {
        e.set(s, n(r));
      }), e;
    }
    if (t instanceof Set) {
      const e = /* @__PURE__ */ new Set();
      return t.forEach((r) => {
        e.add(n(r));
      }), e;
    }
    if (o === "[object Object]") {
      const e = {};
      for (const r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = n(t[r]));
      return e;
    }
    return t;
  }
  return n(f);
}
export {
  h as cloneDeep,
  h as default
};
