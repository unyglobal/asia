// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaxo","repository":"asia","path":"iraq/duhok/zaxo","depth":3,"parent":"iraq/duhok","children":["rakawah"]});
export const childModules = Object.freeze({"rakawah":"./rakawah/rakawah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
