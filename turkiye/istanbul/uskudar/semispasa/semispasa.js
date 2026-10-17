// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"semispasa","repository":"asia","path":"turkiye/istanbul/uskudar/semispasa","depth":4,"parent":"turkiye/istanbul/uskudar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
