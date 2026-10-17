// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jietou","repository":"asia","path":"china/yunnan/jietou","depth":3,"parent":"china/yunnan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
