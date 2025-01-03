class p extends Map {
}
function u(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError("Expected a function");
  const n = function(...c) {
    const o = t ? t.apply(this, c) : c[0], i = n.cache;
    if (i.has(o))
      return i.get(o);
    const a = e.apply(this, c);
    return i.set(o, a), a;
  };
  return n.cache = new p(), n;
}
u.Cache = p;
export {
  u as default,
  u as memoize
};
