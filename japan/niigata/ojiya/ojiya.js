// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ojiya","repository":"asia","path":"japan/niigata/ojiya","depth":3,"parent":"japan/niigata","children":["funaoka","hiyoshi","uenoyama"]});
export const childModules = Object.freeze({"funaoka":"./funaoka/funaoka.js","hiyoshi":"./hiyoshi/hiyoshi.js","uenoyama":"./uenoyama/uenoyama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
