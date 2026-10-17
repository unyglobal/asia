// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hannan","repository":"asia","path":"japan/osaka/hannan","depth":3,"parent":"japan/osaka","children":["satsukidai"]});
export const childModules = Object.freeze({"satsukidai":"./satsukidai/satsukidai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
