// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sekimachi-minami","repository":"asia","path":"japan/tokyo/sekimachi-minami","depth":3,"parent":"japan/tokyo","children":["tatenocho"]});
export const childModules = Object.freeze({"tatenocho":"./tatenocho/tatenocho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
