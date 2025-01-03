function o(t) {
  if (!t || typeof t != "object")
    return !1;
  const r = Object.getPrototypeOf(t);
  return r !== null && (r.constructor && r.constructor.name === "Error" || r instanceof Error);
}
export {
  o as default,
  o as isError
};
