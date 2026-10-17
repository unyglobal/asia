// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ghowr","repository":"asia","path":"afghanistan/ghowr","depth":2,"parent":"afghanistan","children":["shahrak"]});
export const childModules = Object.freeze({"shahrak":"./shahrak/shahrak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
