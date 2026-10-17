// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mevasseret-tsiyyon","repository":"asia","path":"israel/jerusalem/mevasseret-tsiyyon","depth":3,"parent":"israel/jerusalem","children":["mevasseret-yerushalayim"]});
export const childModules = Object.freeze({"mevasseret-yerushalayim":"./mevasseret-yerushalayim/mevasseret-yerushalayim.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
