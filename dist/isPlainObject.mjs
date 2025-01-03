function e(t) {
  if (!(t && typeof t == "object") || Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const r = Object.getPrototypeOf(Object(t));
  if (r === null)
    return !0;
  const o = Object.prototype.hasOwnProperty.call(r, "constructor") && r.constructor;
  return typeof o == "function" && o instanceof o && Function.prototype.toString.call(o) === Function.prototype.toString.call(Object);
}
export {
  e as default,
  e as isPlainObject
};
