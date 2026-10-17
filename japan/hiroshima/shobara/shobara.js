// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shobara","repository":"asia","path":"japan/hiroshima/shobara","depth":3,"parent":"japan/hiroshima","children":["higashihommachi"]});
export const childModules = Object.freeze({"higashihommachi":"./higashihommachi/higashihommachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
