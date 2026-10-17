// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chin-state","repository":"asia","path":"myanmar/chin-state","depth":2,"parent":"myanmar","children":["hakha"]});
export const childModules = Object.freeze({"hakha":"./hakha/hakha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
