// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"futtsu","repository":"asia","path":"japan/chiba/futtsu","depth":3,"parent":"japan/chiba","children":["nakacho"]});
export const childModules = Object.freeze({"nakacho":"./nakacho/nakacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
