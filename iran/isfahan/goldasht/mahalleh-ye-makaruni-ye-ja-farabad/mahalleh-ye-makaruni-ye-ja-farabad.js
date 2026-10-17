// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-makaruni-ye-ja-farabad","repository":"asia","path":"iran/isfahan/goldasht/mahalleh-ye-makaruni-ye-ja-farabad","depth":4,"parent":"iran/isfahan/goldasht","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
