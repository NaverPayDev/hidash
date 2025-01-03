function t(n) {
  return typeof n == "number" && n > -1 && n % 1 === 0 && n <= Number.MAX_SAFE_INTEGER;
}
function r(n) {
  return n != null && typeof n != "function" && t(n.length);
}
export {
  r as isArrayLike,
  t as isLength
};
