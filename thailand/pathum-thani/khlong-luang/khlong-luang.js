// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khlong-luang","repository":"asia","path":"thailand/pathum-thani/khlong-luang","depth":3,"parent":"thailand/pathum-thani","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
