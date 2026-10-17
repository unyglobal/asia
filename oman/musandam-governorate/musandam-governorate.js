// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"musandam-governorate","repository":"asia","path":"oman/musandam-governorate","depth":2,"parent":"oman","children":["khasab"]});
export const childModules = Object.freeze({"khasab":"./khasab/khasab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
