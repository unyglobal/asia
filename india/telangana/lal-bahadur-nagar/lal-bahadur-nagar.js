// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lal-bahadur-nagar","repository":"asia","path":"india/telangana/lal-bahadur-nagar","depth":3,"parent":"india/telangana","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
