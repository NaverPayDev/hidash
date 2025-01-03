function f(r, t) {
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  let e, o = Math.floor(r);
  return function(...n) {
    return --o > 0 && (e = t.apply(this, n)), o <= 1 && (t = void 0), e;
  };
}
export {
  f as before,
  f as default
};
