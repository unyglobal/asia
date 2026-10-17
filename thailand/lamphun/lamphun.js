// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lamphun","repository":"asia","path":"thailand/lamphun","depth":2,"parent":"thailand","children":["pa-sang"]});
export const childModules = Object.freeze({"pa-sang":"./pa-sang/pa-sang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
