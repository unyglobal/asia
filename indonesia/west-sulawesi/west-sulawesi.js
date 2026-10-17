// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"west-sulawesi","repository":"asia","path":"indonesia/west-sulawesi","depth":2,"parent":"indonesia","children":["majene","polewali"]});
export const childModules = Object.freeze({"majene":"./majene/majene.js","polewali":"./polewali/polewali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
