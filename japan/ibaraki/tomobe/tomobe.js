// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tomobe","repository":"asia","path":"japan/ibaraki/tomobe","depth":3,"parent":"japan/ibaraki","children":["chuo","higashidaira","yakumo"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","higashidaira":"./higashidaira/higashidaira.js","yakumo":"./yakumo/yakumo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
