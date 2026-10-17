// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dok-kham-tai","repository":"asia","path":"thailand/phayao/dok-kham-tai","depth":3,"parent":"thailand/phayao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
