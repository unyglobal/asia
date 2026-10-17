// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tallbisah","repository":"asia","path":"syria/homs/tallbisah","depth":3,"parent":"syria/homs","children":["khirbat-al-madras"]});
export const childModules = Object.freeze({"khirbat-al-madras":"./khirbat-al-madras/khirbat-al-madras.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
