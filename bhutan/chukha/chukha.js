// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chukha","repository":"asia","path":"bhutan/chukha","depth":2,"parent":"bhutan","children":["phuntsholing"]});
export const childModules = Object.freeze({"phuntsholing":"./phuntsholing/phuntsholing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
