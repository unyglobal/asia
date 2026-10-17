// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chom-bueng","repository":"asia","path":"thailand/ratchaburi/chom-bueng","depth":3,"parent":"thailand/ratchaburi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
