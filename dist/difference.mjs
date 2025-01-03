import r from "core-js-pure/features/instance/push.js";
function i(n, ...f) {
  if (!n || n.length === 0)
    return [];
  const c = /* @__PURE__ */ new Set();
  for (let t = 0; t < f.length; t++) {
    const e = f[t];
    for (let o = 0; o < e.length; o++)
      c.add(e[o]);
  }
  const l = [];
  for (let t = 0; t < n.length; t++) {
    const e = n[t];
    c.has(e) || r(l).call(l, e);
  }
  return l;
}
export {
  i as default,
  i as difference
};
