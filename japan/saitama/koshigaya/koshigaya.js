// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"koshigaya","repository":"asia","path":"japan/saitama/koshigaya","depth":3,"parent":"japan/saitama","children":["akayamacho"]});
export const childModules = Object.freeze({"akayamacho":"./akayamacho/akayamacho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
