// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bogan","repository":"asia","path":"iran/sistan-and-baluchestan/qasr-e-qand/bogan","depth":4,"parent":"iran/sistan-and-baluchestan/qasr-e-qand","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
