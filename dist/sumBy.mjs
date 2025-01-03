function i(u, l) {
  const r = u.length;
  let o = 0;
  if (typeof l == "function") {
    const n = l;
    for (let t = 0; t < r; t++)
      o += n(u[t]);
    return o;
  }
  const e = l.split("."), c = e.length;
  if (c === 1) {
    const n = e[0];
    for (let t = 0; t < r; t++) {
      const f = u[t][n];
      typeof f == "number" && (o += f);
    }
    return o;
  }
  for (let n = 0; n < r; n++) {
    let t = u[n];
    for (let f = 0; f < c && t != null; f++) {
      const s = e[f];
      t = t[s];
    }
    typeof t == "number" && (o += t);
  }
  return o;
}
export {
  i as default,
  i as sumBy
};
