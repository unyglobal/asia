// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ali-al-gharbi","repository":"asia","path":"iraq/maysan/ali-al-gharbi","depth":3,"parent":"iraq/maysan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
