// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"k-rklareli","repository":"asia","path":"turkiye/kirklareli/k-rklareli","depth":3,"parent":"turkiye/kirklareli","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
