// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"daykundi","repository":"asia","path":"afghanistan/daykundi","depth":2,"parent":"afghanistan","children":["nili"]});
export const childModules = Object.freeze({"nili":"./nili/nili.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
