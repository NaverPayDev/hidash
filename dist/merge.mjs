import { DATE_TAG as y, REGEXP_TAG as p } from "./internal/to-string-tags.mjs";
import { isObject as c } from "./isObject.mjs";
const v = Object.prototype.toString, A = v.call.bind(v);
function h(n, e) {
  return e === y ? new Date(n) : new RegExp(n);
}
function s(n, e) {
  if (e == null)
    return n;
  const f = A(e);
  if (f === y || f === p)
    return h(e, f);
  if (Array.isArray(e)) {
    if (!Array.isArray(n))
      return e.slice();
    const r = e.length;
    n.length < r && (n.length = r);
    for (let t = 0; t < r; t++)
      if (t in e) {
        const i = e[t];
        if (i == null) {
          n[t] = i;
          continue;
        }
        const l = A(i);
        n[t] = l === y || l === p ? h(i, l) : c(i) ? s(c(n[t]) ? n[t] : {}, i) : i;
      }
    return n;
  }
  if (c(e)) {
    const o = Object.keys(e), r = o.length;
    let t;
    for (let i = 0; i < r; i++) {
      t = o[i];
      const l = e[t];
      if (l !== void 0)
        if (l !== null && typeof l == "object") {
          const u = A(l);
          if (u === y || u === p)
            n[t] = h(l, u);
          else {
            const T = n[t];
            n[t] = c(T) ? s(T, l) : s({}, l);
          }
        } else
          n[t] = l;
    }
    return n;
  }
  return e;
}
function d(n, ...e) {
  const f = e.length;
  if (!f)
    return n;
  let o = n;
  for (let r = 0; r < f; r++)
    o = s(o, e[r]);
  return o;
}
export {
  d as default,
  d as merge
};
