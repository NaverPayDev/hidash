var c = Object.defineProperty;
var f = Object.getOwnPropertySymbols;
var h = Object.prototype.hasOwnProperty, p = Object.prototype.propertyIsEnumerable;
var s = (l, t, e) => t in l ? c(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e, i = (l, t) => {
  for (var e in t || (t = {}))
    h.call(t, e) && s(l, e, t[e]);
  if (f)
    for (var e of f(t))
      p.call(t, e) && s(l, e, t[e]);
  return l;
};
import u from "core-js-pure/features/instance/push.js";
function m(l, ...t) {
  if (l == null)
    return {};
  const e = i({}, l), n = [];
  for (let r = 0; r < t.length; r++) {
    const o = t[r];
    if (Array.isArray(o))
      for (let a = 0; a < o.length; a++)
        u(n).call(n, o[a]);
    else
      u(n).call(n, o);
  }
  for (let r = 0; r < n.length; r++)
    delete e[n[r]];
  return e;
}
export {
  m as default,
  m as omit
};
