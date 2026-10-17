// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dalipgarh","repository":"asia","path":"india/haryana/bablai/dalipgarh","depth":4,"parent":"india/haryana/bablai","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
