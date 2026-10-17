// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qiryat-tiv-on","repository":"asia","path":"israel/haifa/qiryat-tiv-on","depth":3,"parent":"israel/haifa","children":["qiryat-amal"]});
export const childModules = Object.freeze({"qiryat-amal":"./qiryat-amal/qiryat-amal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
