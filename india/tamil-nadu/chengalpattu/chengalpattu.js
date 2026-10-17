// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chengalpattu","repository":"asia","path":"india/tamil-nadu/chengalpattu","depth":3,"parent":"india/tamil-nadu","children":["gundur","nattam"]});
export const childModules = Object.freeze({"gundur":"./gundur/gundur.js","nattam":"./nattam/nattam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
