// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balod","repository":"asia","path":"india/chhattisgarh/balod","depth":3,"parent":"india/chhattisgarh","children":["nawapara"]});
export const childModules = Object.freeze({"nawapara":"./nawapara/nawapara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
