// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tartus","repository":"asia","path":"syria/tartus","depth":2,"parent":"syria","children":["baniyas","safita"]});
export const childModules = Object.freeze({"baniyas":"./baniyas/baniyas.js","safita":"./safita/safita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
