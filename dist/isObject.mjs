function n(t) {
  const e = typeof t;
  return !!t && (e === "object" || e === "function");
}
export {
  n as default,
  n as isObject
};
