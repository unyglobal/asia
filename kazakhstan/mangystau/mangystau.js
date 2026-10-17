// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mangystau","repository":"asia","path":"kazakhstan/mangystau","depth":2,"parent":"kazakhstan","children":["aktau","mangistau","zhanaozen"]});
export const childModules = Object.freeze({"aktau":"./aktau/aktau.js","mangistau":"./mangistau/mangistau.js","zhanaozen":"./zhanaozen/zhanaozen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
