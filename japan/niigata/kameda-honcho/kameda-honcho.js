// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kameda-honcho","repository":"asia","path":"japan/niigata/kameda-honcho","depth":3,"parent":"japan/niigata","children":["asahi","motomachi"]});
export const childModules = Object.freeze({"asahi":"./asahi/asahi.js","motomachi":"./motomachi/motomachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
