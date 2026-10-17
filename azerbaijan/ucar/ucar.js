// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ucar","repository":"asia","path":"azerbaijan/ucar","depth":2,"parent":"azerbaijan","children":["ujar"]});
export const childModules = Object.freeze({"ujar":"./ujar/ujar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
