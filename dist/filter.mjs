import i from "core-js-pure/features/instance/push.js";
import { isArrayLike as p } from "./internal/array.mjs";
import { baseIteratee as n } from "./internal/baseIteratee.mjs";
import { isNull as o } from "./isNull.mjs";
import { isPlainObject as u } from "./isPlainObject.mjs";
import { isUndefined as y } from "./isUndefined.mjs";
function P(r, m) {
  if (o(r) || y(r))
    return [];
  const a = n(m), e = [];
  if (p(r)) {
    const f = r;
    for (let t = 0; t < r.length; t++) {
      const s = f[t];
      a(s, t, r) && i(e).call(e, s);
    }
  } else if (u(r)) {
    for (const f in r)
      if (Object.prototype.hasOwnProperty.call(r, f)) {
        const t = r, s = t[f];
        a(s, f, t) && i(e).call(e, s);
      }
  }
  return e;
}
export {
  P as default,
  P as filter
};
