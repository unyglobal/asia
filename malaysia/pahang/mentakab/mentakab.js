// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mentakab","repository":"asia","path":"malaysia/pahang/mentakab","depth":3,"parent":"malaysia/pahang","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
