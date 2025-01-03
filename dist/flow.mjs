function o(...t) {
  return (...l) => {
    let e = t[0](...l);
    for (let r = 1; r < t.length; r++)
      e = t[r](e);
    return e;
  };
}
export {
  o as default,
  o as flow
};
