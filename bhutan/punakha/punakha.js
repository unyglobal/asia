// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"punakha","repository":"asia","path":"bhutan/punakha","depth":2,"parent":"bhutan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
