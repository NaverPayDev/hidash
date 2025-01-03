import i from "core-js-pure/features/instance/includes.js";
const l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o = /^\w*$/;
function u(e, r) {
  return Array.isArray(e) || typeof e != "string" ? !1 : o.test(e) || !l.test(e) || r != null && e in Object(r);
}
function y(e) {
  return Array.isArray(e) ? [...e] : e.split(".");
}
function c(e, r) {
  if (e == null)
    return !1;
  const t = u(r, e) ? [r] : y(r);
  let n = e;
  for (let s = 0; s < t.length; s++) {
    const f = t[s];
    if (n == null || typeof n != "object" || typeof f != "string" || !Object.prototype.hasOwnProperty.call(n, f))
      return !1;
    if (n = n[f], s === t.length - 1)
      return !0;
  }
  return !0;
}
function P(e, r) {
  if (r == null || Array.isArray(r) && !r.length)
    return !1;
  if (typeof r == "string") {
    if (!r || r === "." || r === "..")
      return !1;
    if (!i(r).call(r, "."))
      return e != null && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, r);
  } else if (!r.every((t) => typeof t == "string"))
    return !1;
  return c(e, r);
}
export {
  P as default,
  P as has
};
