import { isArrayLike as o } from "./internal/array.mjs";
function i(t) {
  if (t == null)
    return !0;
  const e = typeof t;
  if (e === "number" || e === "boolean" || e === "function")
    return !0;
  if (o(t))
    return !t.length;
  const r = Object.prototype.toString.call(t);
  if (r === "[object Date]")
    return !0;
  if (r === "[object Map]" || r === "[object Set]")
    return !t.size;
  if (r === "[object Object]") {
    for (const n in t)
      if (Object.prototype.hasOwnProperty.call(t, n))
        return !1;
    return !0;
  }
  return !1;
}
export {
  i as default,
  i as isEmpty
};
