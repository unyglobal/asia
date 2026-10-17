// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shahjanpur","repository":"asia","path":"india/uttar-pradesh/shahjanpur","depth":3,"parent":"india/uttar-pradesh","children":["kachahri"]});
export const childModules = Object.freeze({"kachahri":"./kachahri/kachahri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
