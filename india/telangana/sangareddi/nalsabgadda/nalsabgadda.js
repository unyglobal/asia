// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nalsabgadda","repository":"asia","path":"india/telangana/sangareddi/nalsabgadda","depth":4,"parent":"india/telangana/sangareddi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
