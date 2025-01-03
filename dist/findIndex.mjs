import { baseIteratee as c } from "./internal/baseIteratee.mjs";
function l(e, r, o) {
  const n = e.length;
  if (!n)
    return -1;
  const i = o !== void 0 ? o : 0, s = Math.max(i >= 0 ? i : n + i, 0), f = c(r);
  let t = s - 1;
  for (; ++t < n; )
    if (f(e[t], t, e))
      return t;
  return -1;
}
export {
  l as default,
  l as findIndex
};
