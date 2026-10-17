// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"motookubo","repository":"asia","path":"japan/chiba/narashino/motookubo","depth":4,"parent":"japan/chiba/narashino","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
