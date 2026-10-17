// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ban-talat-bueng","repository":"asia","path":"thailand/chon-buri/ban-talat-bueng","depth":3,"parent":"thailand/chon-buri","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
