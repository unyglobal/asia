// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marj-al-hamam","repository":"asia","path":"jordan/amman/marj-al-hamam","depth":3,"parent":"jordan/amman","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
