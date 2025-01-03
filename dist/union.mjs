import c from "core-js-pure/features/instance/push.js";
function i(...s) {
  const t = [], l = /* @__PURE__ */ new Map();
  for (let e = 0; e < s.length; e++) {
    const n = s[e];
    if (n)
      for (let o = 0; o < n.length; o++) {
        const r = n[o];
        l.has(r) || (l.set(r, !0), c(t).call(t, r));
      }
  }
  return t;
}
export {
  i as default,
  i as union
};
