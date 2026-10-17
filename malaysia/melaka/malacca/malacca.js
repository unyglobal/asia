// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malacca","repository":"asia","path":"malaysia/melaka/malacca","depth":3,"parent":"malaysia/melaka","children":["kampung-lima","kampung-satu"]});
export const childModules = Object.freeze({"kampung-lima":"./kampung-lima/kampung-lima.js","kampung-satu":"./kampung-satu/kampung-satu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
