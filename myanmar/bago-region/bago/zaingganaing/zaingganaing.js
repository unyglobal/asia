// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaingganaing","repository":"asia","path":"myanmar/bago-region/bago/zaingganaing","depth":4,"parent":"myanmar/bago-region/bago","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
