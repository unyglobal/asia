// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toride","repository":"asia","path":"japan/ibaraki/toride","depth":3,"parent":"japan/ibaraki","children":["aoyanagi"]});
export const childModules = Object.freeze({"aoyanagi":"./aoyanagi/aoyanagi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
