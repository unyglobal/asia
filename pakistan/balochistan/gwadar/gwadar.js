// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gwadar","repository":"asia","path":"pakistan/balochistan/gwadar","depth":3,"parent":"pakistan/balochistan","children":["tahsil"]});
export const childModules = Object.freeze({"tahsil":"./tahsil/tahsil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
