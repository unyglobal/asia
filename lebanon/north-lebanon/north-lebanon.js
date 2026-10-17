// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-lebanon","repository":"asia","path":"lebanon/north-lebanon","depth":2,"parent":"lebanon","children":["bsharri","tripoli"]});
export const childModules = Object.freeze({"bsharri":"./bsharri/bsharri.js","tripoli":"./tripoli/tripoli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
