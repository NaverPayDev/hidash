const D = (a, c = 0, {
  leading: m = !0,
  trailing: o = !0,
  maxWait: i
} = {}) => {
  let l = null, t = null, r, s = 0, f = !1, e = null;
  const u = (n) => {
    s = Date.now(), r = a(...n), t = null;
  }, d = (n) => {
    u(n);
  }, T = () => {
    o && t && u(t), l = null, e && (clearTimeout(e), e = null);
  };
  return {
    throttled: (...n) => {
      if (f)
        return;
      const v = Date.now() - s;
      return l ? o && (t = n) : (m && v >= c ? d(n) : o && (t = n), l = setTimeout(() => {
        T();
      }, c), i && !e && (e = setTimeout(() => {
        o && t && u(t), clearTimeout(l), l = null, e = null;
      }, i))), r;
    },
    cancel: () => {
      f = !0, l && clearTimeout(l), e && clearTimeout(e), l = null, e = null, t = null;
    }
  };
};
export {
  D as default,
  D as throttle
};
