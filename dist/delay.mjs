import { toNumber as n } from "./toNumber.mjs";
function u(t, e, ...o) {
  if (typeof t != "function")
    throw new TypeError("Expected a function");
  const r = setTimeout(() => t(...o), e);
  return n(r);
}
export {
  u as default,
  u as delay
};
