import { isArrayLike as i } from "./internal/array.mjs";
import { baseIteratee as s } from "./internal/baseIteratee.mjs";
import { isArray as f } from "./isArray.mjs";
function p(t, n) {
  if (!t || t.length === 0)
    return [];
  const o = t.length, r = new Array(o);
  for (let e = 0; e < o; e++)
    r[e] = n(t[e], e, t);
  return r;
}
function u(t, n) {
  if (!t || t.length === 0)
    return [];
  const o = t.length, r = i(t) ? Array(t.length) : [];
  for (let e = 0; e < o; e++)
    r[e] = n(t[e], e, t);
  return r;
}
function h(t, n) {
  return (f(t) ? p : u)(t, s(n));
}
export {
  h as default,
  h as map
};
