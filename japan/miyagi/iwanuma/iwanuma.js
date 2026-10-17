// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iwanuma","repository":"asia","path":"japan/miyagi/iwanuma","depth":3,"parent":"japan/miyagi","children":["chuo","fujinami","futaki","kuwabara"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","fujinami":"./fujinami/fujinami.js","futaki":"./futaki/futaki.js","kuwabara":"./kuwabara/kuwabara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
