// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"katsuta","repository":"asia","path":"japan/ibaraki/katsuta","depth":3,"parent":"japan/ibaraki","children":["odaira"]});
export const childModules = Object.freeze({"odaira":"./odaira/odaira.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
