// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ichikawa","repository":"asia","path":"japan/chiba/ichikawa","depth":3,"parent":"japan/chiba","children":["mama"]});
export const childModules = Object.freeze({"mama":"./mama/mama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
