// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parwan","repository":"asia","path":"afghanistan/parwan","depth":2,"parent":"afghanistan","children":["bagram","charikar","jabal-os-saraj"]});
export const childModules = Object.freeze({"bagram":"./bagram/bagram.js","charikar":"./charikar/charikar.js","jabal-os-saraj":"./jabal-os-saraj/jabal-os-saraj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
