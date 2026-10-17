// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamamatsu","repository":"asia","path":"japan/shizuoka/hamamatsu","depth":3,"parent":"japan/shizuoka","children":["ebitsuka","kajimachi","kamiasada"]});
export const childModules = Object.freeze({"ebitsuka":"./ebitsuka/ebitsuka.js","kajimachi":"./kajimachi/kajimachi.js","kamiasada":"./kamiasada/kamiasada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
