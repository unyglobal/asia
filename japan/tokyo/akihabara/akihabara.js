// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akihabara","repository":"asia","path":"japan/tokyo/akihabara","depth":3,"parent":"japan/tokyo","children":["higashikanda","iwamotocho","sotokanda"]});
export const childModules = Object.freeze({"higashikanda":"./higashikanda/higashikanda.js","iwamotocho":"./iwamotocho/iwamotocho.js","sotokanda":"./sotokanda/sotokanda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
