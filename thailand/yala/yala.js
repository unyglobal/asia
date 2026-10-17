// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yala","repository":"asia","path":"thailand/yala","depth":2,"parent":"thailand","children":["betong"]});
export const childModules = Object.freeze({"betong":"./betong/betong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
