// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maysan","repository":"asia","path":"iraq/maysan","depth":2,"parent":"iraq","children":["al-amarah","ali-al-gharbi","qal-at-salih"]});
export const childModules = Object.freeze({"al-amarah":"./al-amarah/al-amarah.js","ali-al-gharbi":"./ali-al-gharbi/ali-al-gharbi.js","qal-at-salih":"./qal-at-salih/qal-at-salih.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
