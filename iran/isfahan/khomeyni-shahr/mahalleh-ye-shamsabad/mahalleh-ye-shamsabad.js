// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-shamsabad","repository":"asia","path":"iran/isfahan/khomeyni-shahr/mahalleh-ye-shamsabad","depth":4,"parent":"iran/isfahan/khomeyni-shahr","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
