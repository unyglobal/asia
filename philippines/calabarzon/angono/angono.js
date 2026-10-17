// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"angono","repository":"asia","path":"philippines/calabarzon/angono","depth":3,"parent":"philippines/calabarzon","children":["bloomingdale-homes","carebi-subdivision","rainbow-village"]});
export const childModules = Object.freeze({"bloomingdale-homes":"./bloomingdale-homes/bloomingdale-homes.js","carebi-subdivision":"./carebi-subdivision/carebi-subdivision.js","rainbow-village":"./rainbow-village/rainbow-village.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
