import u from "core-js-pure/features/instance/push.js";
import { isArray as r } from "./isArray.mjs";
function i(t, o = 1, s) {
  const e = s || [], f = t.length;
  if (t && f > 0)
    for (let l = 0; l < f; l++) {
      const n = t[l];
      n && r(n) && o > 0 ? i(n, o - 1, e) : u(e).call(e, n);
    }
  return e;
}
function p(t) {
  return t == null ? [] : i(t, 1);
}
export {
  p as default,
  p as flatten
};
