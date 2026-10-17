// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dindigul","repository":"asia","path":"india/tamil-nadu/dindigul","depth":3,"parent":"india/tamil-nadu","children":["mettu-rajakkapatti"]});
export const childModules = Object.freeze({"mettu-rajakkapatti":"./mettu-rajakkapatti/mettu-rajakkapatti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
