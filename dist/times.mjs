function u(r, i) {
  if (!Number.isInteger(r) || r < 1 || r >= Number.MAX_SAFE_INTEGER)
    return [];
  const t = r, s = new Array(t);
  if (i)
    for (let e = 0; e < t; e++)
      s[e] = i(e);
  else
    for (let e = 0; e < t; e++)
      s[e] = e;
  return s;
}
export {
  u as default,
  u as times
};
