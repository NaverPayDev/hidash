import { isArrayLike as s } from "./internal/array.mjs";
import { baseIteratee as i } from "./internal/baseIteratee.mjs";
import { isPlainObject as m } from "./isPlainObject.mjs";
import { keys as u } from "./keys.mjs";
function k(r, f) {
  if (!f && u(r).length === 0)
    return !1;
  const a = i(f);
  if (m(r)) {
    for (const e in r)
      if (Object.prototype.hasOwnProperty.call(r, e) && a(r[e], 0, []))
        return !0;
  }
  if (s(r)) {
    const e = r;
    for (let t = 0; t < r.length; t++)
      if (a(e[t], t, e))
        return !0;
  }
  return !1;
}
export {
  k as default,
  k as some
};
