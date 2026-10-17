// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nong-bua-lamphu","repository":"asia","path":"thailand/nong-bua-lamphu","depth":2,"parent":"thailand","children":["na-klang"]});
export const childModules = Object.freeze({"na-klang":"./na-klang/na-klang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
