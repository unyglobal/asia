// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rova-haqirya","repository":"asia","path":"israel/southern-district/ashdod/rova-haqirya","depth":4,"parent":"israel/southern-district/ashdod","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
