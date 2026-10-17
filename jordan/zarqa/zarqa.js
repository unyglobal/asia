// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zarqa","repository":"asia","path":"jordan/zarqa","depth":2,"parent":"jordan","children":["az-zulayl","russeifa"]});
export const childModules = Object.freeze({"az-zulayl":"./az-zulayl/az-zulayl.js","russeifa":"./russeifa/russeifa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
