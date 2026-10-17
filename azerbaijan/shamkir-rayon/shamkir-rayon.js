// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shamkir-rayon","repository":"asia","path":"azerbaijan/shamkir-rayon","depth":2,"parent":"azerbaijan","children":["shamkhir"]});
export const childModules = Object.freeze({"shamkhir":"./shamkhir/shamkhir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
