// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"silifke","repository":"asia","path":"turkiye/mersin/silifke","depth":3,"parent":"turkiye/mersin","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
