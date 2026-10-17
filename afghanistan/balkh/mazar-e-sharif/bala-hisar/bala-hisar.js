// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bala-hisar","repository":"asia","path":"afghanistan/balkh/mazar-e-sharif/bala-hisar","depth":4,"parent":"afghanistan/balkh/mazar-e-sharif","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
