// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riau-islands","repository":"asia","path":"indonesia/riau-islands","depth":2,"parent":"indonesia","children":["tanjung-balai","tanjung-pinang"]});
export const childModules = Object.freeze({"tanjung-balai":"./tanjung-balai/tanjung-balai.js","tanjung-pinang":"./tanjung-pinang/tanjung-pinang.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
