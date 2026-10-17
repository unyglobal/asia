// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samangan","repository":"asia","path":"afghanistan/samangan","depth":2,"parent":"afghanistan","children":["aibak"]});
export const childModules = Object.freeze({"aibak":"./aibak/aibak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
