// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arys","repository":"asia","path":"kazakhstan/turkistan/arys","depth":3,"parent":"kazakhstan/turkistan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
