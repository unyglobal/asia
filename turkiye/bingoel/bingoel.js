// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bingoel","repository":"asia","path":"turkiye/bingoel","depth":2,"parent":"turkiye","children":["bingol","genc","solhan"]});
export const childModules = Object.freeze({"bingol":"./bingol/bingol.js","genc":"./genc/genc.js","solhan":"./solhan/solhan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
