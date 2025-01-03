import { isArray as u } from "./isArray.mjs";
function y(i, c, l) {
  const s = Object(i), f = u(s), n = l !== void 0 ? l : f ? [] : {};
  if (f) {
    const e = s;
    for (let t = 0; t < e.length; t++) {
      const o = t, r = e[t];
      if (c(n, r, o, s) === !1)
        break;
    }
  } else {
    const e = Object.keys(s), t = s;
    for (let o = 0; o < e.length; o++) {
      const r = e[o], a = t[r];
      if (c(n, a, r, s) === !1)
        break;
    }
  }
  return n;
}
export {
  y as default,
  y as transform
};
