import l from "core-js-pure/features/instance/push.js";
function h(f, i = String) {
  if (!f)
    return {};
  const n = {};
  if (Array.isArray(f)) {
    const u = f.length;
    let r = 0;
    if (typeof i == "function") {
      for (; r < u; r++) {
        var o;
        const e = f[r], d = e === void 0 ? "undefined" : i(e);
        l(o = n[d] || (n[d] = [])).call(o, e);
      }
      return n;
    }
    for (; r < u; r++) {
      var a;
      const e = f[r];
      if (e == null) {
        var c;
        l(c = n.undefined || (n.undefined = [])).call(c, e);
        continue;
      }
      const d = e[i], m = d == null ? "undefined" : String(d);
      l(a = n[m] || (n[m] = [])).call(a, e);
    }
    return n;
  }
  const t = Object.entries(f), v = t.length;
  let s = 0;
  if (typeof i == "function") {
    for (; s < v; s++) {
      var y;
      const u = t[s][1], r = u === void 0 ? "undefined" : i(u);
      l(y = n[r] || (n[r] = [])).call(y, u);
    }
    return n;
  }
  for (; s < v; s++) {
    var p;
    const u = t[s][1];
    if (u == null) {
      var g;
      l(g = n.undefined || (n.undefined = [])).call(g, u);
      continue;
    }
    const r = u[i], e = r == null ? "undefined" : String(r);
    l(p = n[e] || (n[e] = [])).call(p, u);
  }
  return n;
}
export {
  h as default,
  h as groupBy
};
