// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hiyoshicho","repository":"asia","path":"japan/osaka/moriguchi/hiyoshicho","depth":4,"parent":"japan/osaka/moriguchi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
