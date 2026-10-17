// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qiryat-amal","repository":"asia","path":"israel/haifa/qiryat-tiv-on/qiryat-amal","depth":4,"parent":"israel/haifa/qiryat-tiv-on","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
