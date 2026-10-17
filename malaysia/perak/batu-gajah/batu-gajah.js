// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batu-gajah","repository":"asia","path":"malaysia/perak/batu-gajah","depth":3,"parent":"malaysia/perak","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
