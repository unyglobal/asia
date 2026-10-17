// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pilibangan","repository":"asia","path":"india/rajasthan/pilibangan","depth":3,"parent":"india/rajasthan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
