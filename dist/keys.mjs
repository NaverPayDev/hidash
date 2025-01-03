import { isArrayLike as a } from "./internal/array.mjs";
const l = Object.keys, c = Array.isArray;
function f(y) {
  if (y == null)
    return [];
  const r = Object(y);
  if (c(r)) {
    const s = l(r), e = r.length;
    if (s.length === e) {
      const n = new Array(e);
      let t = 0;
      for (; t < e; )
        n[t] = String(t++);
      return n;
    }
    const o = new Array(s.length);
    let i = 0;
    for (; i < e; )
      o[i] = String(i++);
    for (const n of s) {
      const t = +n;
      (isNaN(t) || t >= e) && (o[i++] = n);
    }
    return o;
  }
  return a(r), l(r);
}
export {
  f as default,
  f as keys
};
