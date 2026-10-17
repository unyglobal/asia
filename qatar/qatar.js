// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qatar","repository":"asia","path":"qatar","depth":1,"parent":"","children":["al-daayen","al-khor","al-shahaniya","al-wakrah","baladiyat-ad-dawhah","baladiyat-ar-rayyan","umm-salal"]});
export const childModules = Object.freeze({"al-daayen":"./al-daayen/al-daayen.js","al-khor":"./al-khor/al-khor.js","al-shahaniya":"./al-shahaniya/al-shahaniya.js","al-wakrah":"./al-wakrah/al-wakrah.js","baladiyat-ad-dawhah":"./baladiyat-ad-dawhah/baladiyat-ad-dawhah.js","baladiyat-ar-rayyan":"./baladiyat-ar-rayyan/baladiyat-ar-rayyan.js","umm-salal":"./umm-salal/umm-salal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
