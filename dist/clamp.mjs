function o(t, N, s) {
  const [a, i] = s === void 0 ? [void 0, N] : [N, s];
  if (isNaN(t))
    return NaN;
  const c = a != null ? a : t, f = i != null ? i : t;
  return isNaN(c) || isNaN(f) ? 0 : Math.min(Math.max(t, c), f);
}
export {
  o as clamp,
  o as default
};
