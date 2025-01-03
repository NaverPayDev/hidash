function f(u, e) {
  if (typeof e != "number")
    return u;
  if (u === "" || e <= 0 || !Number.isFinite(e) || isNaN(e))
    return "";
  let i = "", t = u, r = Math.floor(e);
  for (; r > 0; )
    r % 2 === 1 && (i = i + t), t = t + t, r = Math.floor(r / 2);
  return i;
}
export {
  f as default,
  f as repeat
};
