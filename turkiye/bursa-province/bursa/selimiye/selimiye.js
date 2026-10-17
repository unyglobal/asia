// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"selimiye","repository":"asia","path":"turkiye/bursa-province/bursa/selimiye","depth":4,"parent":"turkiye/bursa-province/bursa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
