function c(e, t) {
  if (typeof e == "number" && typeof t == "number" && isNaN(e) && isNaN(t) || e === t)
    return !0;
  if (typeof e == "object" && e !== null && typeof t == "object" && t !== null) {
    const f = e, n = t;
    if (Object.getPrototypeOf(f) !== Object.getPrototypeOf(n))
      return !1;
    const r = Object.keys(f), o = Object.keys(n);
    if (r.length !== o.length)
      return !1;
    for (const s of r)
      if (!c(f[s], n[s]))
        return !1;
    return !0;
  }
  return !1;
}
export {
  c as default,
  c as isEqual
};
