// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sam-sen","repository":"asia","path":"thailand/bangkok/dusit/sam-sen","depth":4,"parent":"thailand/bangkok/dusit","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
