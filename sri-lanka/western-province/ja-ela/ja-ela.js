// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ja-ela","repository":"asia","path":"sri-lanka/western-province/ja-ela","depth":3,"parent":"sri-lanka/western-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
