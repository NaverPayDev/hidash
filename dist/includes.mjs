function n(a, l, t) {
  if (!a)
    return !1;
  const r = Object.values(a), e = r.length;
  if (e === 0)
    return !1;
  const u = t ? t < 0 ? Math.max(e + t, 0) : t : 0;
  if (u >= e)
    return !1;
  for (let s = u; s < e; s++)
    if (r[s] === l)
      return !0;
  return !1;
}
export {
  n as default,
  n as includes
};
