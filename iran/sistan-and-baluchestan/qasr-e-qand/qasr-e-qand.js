// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qasr-e-qand","repository":"asia","path":"iran/sistan-and-baluchestan/qasr-e-qand","depth":3,"parent":"iran/sistan-and-baluchestan","children":["bogan"]});
export const childModules = Object.freeze({"bogan":"./bogan/bogan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
