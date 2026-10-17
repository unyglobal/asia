// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"udumalaippettai","repository":"asia","path":"india/tamil-nadu/udumalaippettai","depth":3,"parent":"india/tamil-nadu","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
