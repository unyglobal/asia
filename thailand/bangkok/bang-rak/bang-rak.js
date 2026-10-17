// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bang-rak","repository":"asia","path":"thailand/bangkok/bang-rak","depth":3,"parent":"thailand/bangkok","children":["surawong"]});
export const childModules = Object.freeze({"surawong":"./surawong/surawong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
