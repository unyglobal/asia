// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bahawalpur","repository":"asia","path":"pakistan/punjab/bahawalpur","depth":3,"parent":"pakistan/punjab","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
