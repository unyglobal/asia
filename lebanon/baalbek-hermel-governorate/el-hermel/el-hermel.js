// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"el-hermel","repository":"asia","path":"lebanon/baalbek-hermel-governorate/el-hermel","depth":3,"parent":"lebanon/baalbek-hermel-governorate","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
