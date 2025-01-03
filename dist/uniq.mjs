import s from "core-js-pure/features/instance/push.js";
function i(t) {
  if (!t || !("length" in t))
    return [];
  const e = t.length;
  if (e <= 1)
    return Array.from(t);
  if (e < 200)
    return Array.from(new Set(Array.from(t)));
  const f = /* @__PURE__ */ new Map(), n = [];
  for (let r = 0; r < e; r++) {
    const o = t[r];
    f.has(o) || (f.set(o, !0), s(n).call(n, o));
  }
  return n;
}
export {
  i as default,
  i as uniq
};
