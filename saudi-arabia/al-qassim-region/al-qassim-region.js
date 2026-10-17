// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qassim-region","repository":"asia","path":"saudi-arabia/al-qassim-region","depth":2,"parent":"saudi-arabia","children":["al-bada-i-al-wusta","al-bukayriyah","al-khabra","al-mithnab","ar-rass","buraydah","riyad-al-khabra","unaizah","uyun-al-jiwa"]});
export const childModules = Object.freeze({"al-bada-i-al-wusta":"./al-bada-i-al-wusta/al-bada-i-al-wusta.js","al-bukayriyah":"./al-bukayriyah/al-bukayriyah.js","al-khabra":"./al-khabra/al-khabra.js","al-mithnab":"./al-mithnab/al-mithnab.js","ar-rass":"./ar-rass/ar-rass.js","buraydah":"./buraydah/buraydah.js","riyad-al-khabra":"./riyad-al-khabra/riyad-al-khabra.js","unaizah":"./unaizah/unaizah.js","uyun-al-jiwa":"./uyun-al-jiwa/uyun-al-jiwa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
