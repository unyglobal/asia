// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zhangjiachuan","repository":"asia","path":"china/gansu/zhangjiachuan","depth":3,"parent":"china/gansu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
