// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"segamat","repository":"asia","path":"malaysia/johor/segamat","depth":3,"parent":"malaysia/johor","children":["kampong-tengah"]});
export const childModules = Object.freeze({"kampong-tengah":"./kampong-tengah/kampong-tengah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
