// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kabul","repository":"asia","path":"afghanistan/kabul","depth":2,"parent":"afghanistan","children":["istalif","paghman"]});
export const childModules = Object.freeze({"istalif":"./istalif/istalif.js","paghman":"./paghman/paghman.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
