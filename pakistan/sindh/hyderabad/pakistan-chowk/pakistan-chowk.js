// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pakistan-chowk","repository":"asia","path":"pakistan/sindh/hyderabad/pakistan-chowk","depth":4,"parent":"pakistan/sindh/hyderabad","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
