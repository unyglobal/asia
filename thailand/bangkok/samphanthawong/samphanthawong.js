// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samphanthawong","repository":"asia","path":"thailand/bangkok/samphanthawong","depth":3,"parent":"thailand/bangkok","children":["samphantawong"]});
export const childModules = Object.freeze({"samphantawong":"./samphantawong/samphantawong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
