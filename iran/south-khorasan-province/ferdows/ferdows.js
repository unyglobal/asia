// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferdows","repository":"asia","path":"iran/south-khorasan-province/ferdows","depth":3,"parent":"iran/south-khorasan-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
