// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pushkino","repository":"asia","path":"azerbaijan/bilasuvar-district/pushkino","depth":3,"parent":"azerbaijan/bilasuvar-district","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
