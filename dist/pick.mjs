import { flatten as e } from "./flatten.mjs";
function s(n, ...f) {
  if (n == null)
    return {};
  const o = e(f), r = {};
  for (const t of o)
    t in n && (r[t] = n[t]);
  return r;
}
export {
  s as default,
  s as pick
};
