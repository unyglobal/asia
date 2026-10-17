// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yuanyang-a","repository":"asia","path":"china/yuanyang-a","depth":2,"parent":"china","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
