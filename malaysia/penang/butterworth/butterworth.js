// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"butterworth","repository":"asia","path":"malaysia/penang/butterworth","depth":3,"parent":"malaysia/penang","children":["kampong-jawa","kampung-jawa"]});
export const childModules = Object.freeze({"kampong-jawa":"./kampong-jawa/kampong-jawa.js","kampung-jawa":"./kampung-jawa/kampung-jawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
