// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rishon-letsiyyon","repository":"asia","path":"israel/central-district/rishon-letsiyyon","depth":3,"parent":"israel/central-district","children":["qiryat-rishon"]});
export const childModules = Object.freeze({"qiryat-rishon":"./qiryat-rishon/qiryat-rishon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
