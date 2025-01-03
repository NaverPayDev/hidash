import { STRING_OBJECT_TAG as r } from "./internal/to-string-tags.mjs";
import { isArray as o } from "./isArray.mjs";
function p(t) {
  return typeof t == "string" || !o(t) && typeof t == "object" && t !== null && Object.prototype.toString.call(t) === r;
}
export {
  p as default,
  p as isString
};
