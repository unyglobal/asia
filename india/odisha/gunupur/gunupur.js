// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gunupur","repository":"asia","path":"india/odisha/gunupur","depth":3,"parent":"india/odisha","children":["kapuguda"]});
export const childModules = Object.freeze({"kapuguda":"./kapuguda/kapuguda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
