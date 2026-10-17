// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tekari","repository":"asia","path":"india/bihar/tekari","depth":3,"parent":"india/bihar","children":["belhariya","dulah-bigha"]});
export const childModules = Object.freeze({"belhariya":"./belhariya/belhariya.js","dulah-bigha":"./dulah-bigha/dulah-bigha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
