function D(I, f = 0, {
  leading: T = !1,
  trailing: b = !0,
  maxWait: o
} = {}) {
  let t = null, u = null, s, r, l = null, i = 0;
  const m = (n) => (i = n, r = I.apply(s, u), s = u = null, r), a = (n, e) => setTimeout(n, e), v = (n) => {
    const e = n - l, c = n - i, k = f - e;
    return o === void 0 ? k : Math.min(k, o - c);
  }, g = (n) => {
    if (l === null)
      return !0;
    const e = n - l, c = n - i;
    return l === null || e >= f || e < 0 || o !== void 0 && c >= o;
  }, h = (n) => (t = null, b && u ? m(n) : (u = s = null, r)), d = () => {
    const n = Date.now();
    if (g(n))
      return h(n);
    t = a(d, v(n));
  }, p = (n) => (i = n, t = a(d, f), T ? m(n) : r);
  return {
    debounce: function(...n) {
      const e = Date.now(), c = g(e);
      if (u = n, s = this, l = e, c) {
        if (t === null)
          return p(l);
        if (o !== void 0)
          return t = a(d, v(e)), m(l);
      }
      return t === null && (t = a(d, v(e))), r;
    },
    cancel: () => {
      t !== null && clearTimeout(t), i = 0, u = l = s = t = null;
    },
    flush: () => t === null ? r : h(Date.now())
  };
}
export {
  D as debounce,
  D as default
};
