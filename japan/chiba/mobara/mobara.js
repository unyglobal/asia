// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mobara","repository":"asia","path":"japan/chiba/mobara","depth":3,"parent":"japan/chiba","children":["takashicho"]});
export const childModules = Object.freeze({"takashicho":"./takashicho/takashicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
