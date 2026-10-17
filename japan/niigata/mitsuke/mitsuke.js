// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mitsuke","repository":"asia","path":"japan/niigata/mitsuke","depth":3,"parent":"japan/niigata","children":["motomachi"]});
export const childModules = Object.freeze({"motomachi":"./motomachi/motomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
