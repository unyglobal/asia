// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kafr-qasim","repository":"asia","path":"israel/central-district/kafr-qasim","depth":3,"parent":"israel/central-district","children":["ed-deir"]});
export const childModules = Object.freeze({"ed-deir":"./ed-deir/ed-deir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
