// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mu-se","repository":"asia","path":"myanmar/shan-state/mu-se","depth":3,"parent":"myanmar/shan-state","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
