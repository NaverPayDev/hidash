function f(r, n = Boolean) {
  if (!r)
    return !0;
  const t = Object.values(r), u = t.length;
  if (u === 0)
    return !0;
  for (let e = 0; e < u; e++)
    if (!n(t[e], e, r))
      return !1;
  return !0;
}
export {
  f as default,
  f as every
};
