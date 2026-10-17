// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabaragamuwa-province","repository":"asia","path":"sri-lanka/sabaragamuwa-province","depth":2,"parent":"sri-lanka","children":["kegalle","ratnapura"]});
export const childModules = Object.freeze({"kegalle":"./kegalle/kegalle.js","ratnapura":"./ratnapura/ratnapura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
