import { isNull as r } from "./isNull.mjs";
function c(n, ...e) {
  const t = Object(n);
  if (e.length === 0)
    return t;
  for (const o of e)
    if (!r(o))
      for (const f of Object.keys(o))
        t[f] = o[f];
  return t;
}
export {
  c as assign,
  c as default
};
