// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thimphu","repository":"asia","path":"bhutan/thimphu-district/thimphu","depth":3,"parent":"bhutan/thimphu-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
