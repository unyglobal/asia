// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aihara","repository":"asia","path":"japan/kanagawa/aihara","depth":3,"parent":"japan/kanagawa","children":["machiya","nihommatsu"]});
export const childModules = Object.freeze({"machiya":"./machiya/machiya.js","nihommatsu":"./nihommatsu/nihommatsu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
