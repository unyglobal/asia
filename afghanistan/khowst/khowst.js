// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khowst","repository":"asia","path":"afghanistan/khowst","depth":2,"parent":"afghanistan","children":["khost"]});
export const childModules = Object.freeze({"khost":"./khost/khost.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
