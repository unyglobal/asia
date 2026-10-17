// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nampo","repository":"asia","path":"north-korea/nampo","depth":2,"parent":"north-korea","children":["namp-o"]});
export const childModules = Object.freeze({"namp-o":"./namp-o/namp-o.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
