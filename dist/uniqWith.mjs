import r from "core-js-pure/features/instance/push.js";
import { uniq as o } from "./uniq.mjs";
function p(t, i) {
  if (!Array.isArray(t))
    return [];
  const n = t.length;
  if (!i && n > 200)
    return [...new Set(t)];
  if (!i)
    return o(t);
  const e = [];
  let f = -1;
  for (; ++f < n; ) {
    let s = !1;
    const u = t[f];
    for (const l of e)
      if (i(l, u)) {
        s = !0;
        break;
      }
    s || r(e).call(e, u);
  }
  return e;
}
export {
  p as default,
  p as uniqWith
};
