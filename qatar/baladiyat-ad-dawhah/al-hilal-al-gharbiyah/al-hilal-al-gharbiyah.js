// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-hilal-al-gharbiyah","repository":"asia","path":"qatar/baladiyat-ad-dawhah/al-hilal-al-gharbiyah","depth":3,"parent":"qatar/baladiyat-ad-dawhah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
