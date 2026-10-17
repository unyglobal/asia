// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"noveleta","repository":"asia","path":"philippines/calabarzon/noveleta","depth":3,"parent":"philippines/calabarzon","children":["cuevas-atlantica-subdivision"]});
export const childModules = Object.freeze({"cuevas-atlantica-subdivision":"./cuevas-atlantica-subdivision/cuevas-atlantica-subdivision.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
