// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagai","repository":"asia","path":"japan/yamagata/nagai","depth":3,"parent":"japan/yamagata","children":["motomachi","yotsuya"]});
export const childModules = Object.freeze({"motomachi":"./motomachi/motomachi.js","yotsuya":"./yotsuya/yotsuya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
