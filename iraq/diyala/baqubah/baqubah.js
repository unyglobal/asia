// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baqubah","repository":"asia","path":"iraq/diyala/baqubah","depth":3,"parent":"iraq/diyala","children":["al-hajjiyah","hayy-as-salam"]});
export const childModules = Object.freeze({"al-hajjiyah":"./al-hajjiyah/al-hajjiyah.js","hayy-as-salam":"./hayy-as-salam/hayy-as-salam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
