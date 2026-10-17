// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mirpur-model-thana","repository":"asia","path":"bangladesh/dhaka-division/mirpur-model-thana","depth":3,"parent":"bangladesh/dhaka-division","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
