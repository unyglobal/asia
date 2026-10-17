// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ra-anana","repository":"asia","path":"israel/central-district/ra-anana","depth":3,"parent":"israel/central-district","children":["qiryat-david-remez","qiryat-eliyahu-golomb","qiryat-shazar","qiryat-weizmann"]});
export const childModules = Object.freeze({"qiryat-david-remez":"./qiryat-david-remez/qiryat-david-remez.js","qiryat-eliyahu-golomb":"./qiryat-eliyahu-golomb/qiryat-eliyahu-golomb.js","qiryat-shazar":"./qiryat-shazar/qiryat-shazar.js","qiryat-weizmann":"./qiryat-weizmann/qiryat-weizmann.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
