import a from "core-js-pure/features/instance/push.js";
import { isArrayLike as n } from "./internal/array.mjs";
import { isArray as m } from "./isArray.mjs";
function y(e) {
  if (e == null)
    return [];
  let r;
  if (e instanceof Map) {
    r = [];
    const f = Array.from(e.entries());
    for (let t = 0; t < f.length; t++)
      a(r).call(r, f[t][0]), a(r).call(r, f[t][1]);
  } else if (e instanceof Set)
    r = Array.from(e);
  else if (typeof e == "string" || m(e))
    r = [...e];
  else if (typeof e == "object")
    n(e) ? r = Array.from(e) : r = Object.values(e);
  else
    return [];
  let s = r.length;
  for (; s > 0; ) {
    const f = Math.floor(Math.random() * s--), t = r[s];
    r[s] = r[f], r[f] = t;
  }
  return r;
}
export {
  y as default,
  y as shuffle
};
