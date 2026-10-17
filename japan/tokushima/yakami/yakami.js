// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yakami","repository":"asia","path":"japan/tokushima/yakami","depth":3,"parent":"japan/tokushima","children":["kasuga"]});
export const childModules = Object.freeze({"kasuga":"./kasuga/kasuga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
