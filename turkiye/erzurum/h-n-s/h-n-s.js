// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"h-n-s","repository":"asia","path":"turkiye/erzurum/h-n-s","depth":3,"parent":"turkiye/erzurum","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
