// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"makuhari","repository":"asia","path":"japan/chiba/makuhari","depth":3,"parent":"japan/chiba","children":["hibino","wakaba"]});
export const childModules = Object.freeze({"hibino":"./hibino/hibino.js","wakaba":"./wakaba/wakaba.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
