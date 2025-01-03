import { NUMBER_OBJECT_TAG as o } from "./internal/to-string-tags.mjs";
function e(t) {
  return typeof t == "number" || typeof t == "object" && t !== null && Object.prototype.toString.call(t) === o;
}
export {
  e as default,
  e as isNumber
};
