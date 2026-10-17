// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"izumiotsu","repository":"asia","path":"japan/osaka/izumiotsu","depth":3,"parent":"japan/osaka","children":["mushitoricho"]});
export const childModules = Object.freeze({"mushitoricho":"./mushitoricho/mushitoricho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
