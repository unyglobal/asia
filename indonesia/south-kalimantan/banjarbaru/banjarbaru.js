// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"banjarbaru","repository":"asia","path":"indonesia/south-kalimantan/banjarbaru","depth":3,"parent":"indonesia/south-kalimantan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
