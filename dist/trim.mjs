import r from "core-js-pure/features/instance/trim.js";
function f(e = "", i, n) {
  const t = e == null ? "" : String(e);
  return t && (n != null || i === void 0) ? r(t).call(t) : !t || !i ? t : a(t, i);
}
function a(e, i) {
  let n = 0, t = e.length - 1;
  const l = new Set(i);
  for (; n <= t && (l.has(e[n]) || l.has(e[t])); )
    l.has(e[n]) && n++, l.has(e[t]) && t--;
  return n <= t ? e.slice(n, t + 1) : "";
}
export {
  f as default,
  f as trim
};
