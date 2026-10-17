// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yurigaoka","repository":"asia","path":"japan/fukuoka/yurigaoka","depth":3,"parent":"japan/fukuoka","children":["higashikoyo"]});
export const childModules = Object.freeze({"higashikoyo":"./higashikoyo/higashikoyo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
