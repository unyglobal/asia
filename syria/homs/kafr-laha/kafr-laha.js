// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kafr-laha","repository":"asia","path":"syria/homs/kafr-laha","depth":3,"parent":"syria/homs","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
