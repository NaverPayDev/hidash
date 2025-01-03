function s(e, l = 1) {
  if (!e || l < 1)
    return [];
  const n = Math.max(Math.floor(l), 1), o = e.length, c = new Array(Math.ceil(o / n));
  let r = 0;
  for (let t = 0; t < o; t += n)
    c[r++] = e.slice(t, t + n);
  return c;
}
export {
  s as chunk,
  s as default
};
