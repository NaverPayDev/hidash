import { isArrayLike as e } from "./internal/array.mjs";
import { MAP_TAG as f, SET_TAG as u } from "./internal/to-string-tags.mjs";
function n(r) {
  if (r == null)
    return 0;
  if (e(r))
    return r.length;
  const t = Object.prototype.toString.call(r);
  return t === f || t === u ? r.size : typeof r == "object" ? Object.keys(r).length : 0;
}
export {
  n as default,
  n as size
};
