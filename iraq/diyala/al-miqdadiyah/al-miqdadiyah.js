// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-miqdadiyah","repository":"asia","path":"iraq/diyala/al-miqdadiyah","depth":3,"parent":"iraq/diyala","children":["hayy-al-urubah"]});
export const childModules = Object.freeze({"hayy-al-urubah":"./hayy-al-urubah/hayy-al-urubah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
