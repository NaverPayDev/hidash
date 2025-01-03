import { isNumber as n } from "./isNumber.mjs";
import { toNumber as o } from "./toNumber.mjs";
function p(t, r) {
  if (typeof t == "string" && typeof r == "string")
    return t < r;
  const f = n(t) ? t : o(t), i = n(r) ? r : o(r);
  return f < i;
}
export {
  p as default,
  p as lt
};
