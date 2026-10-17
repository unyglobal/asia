// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"na-klang","repository":"asia","path":"thailand/nong-bua-lamphu/na-klang","depth":3,"parent":"thailand/nong-bua-lamphu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
