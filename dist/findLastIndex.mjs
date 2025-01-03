import { baseIteratee as a } from "./internal/baseIteratee.mjs";
function d(e, r, o) {
  const n = e.length;
  if (!n)
    return -1;
  const i = o !== void 0 ? o : n - 1, s = Math.max(i >= 0 ? i : n + i, 0), f = a(r);
  let t = s + 1;
  for (; t--; )
    if (f(e[t], t, e))
      return t;
  return -1;
}
export {
  d as default,
  d as findLastIndex
};
