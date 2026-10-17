// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"songadh","repository":"asia","path":"india/gujarat/songadh","depth":3,"parent":"india/gujarat","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
