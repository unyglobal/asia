// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andigoda","repository":"asia","path":"sri-lanka/western-province/beruwala/andigoda","depth":4,"parent":"sri-lanka/western-province/beruwala","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
