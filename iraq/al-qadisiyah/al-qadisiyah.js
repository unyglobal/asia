// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qadisiyah","repository":"asia","path":"iraq/al-qadisiyah","depth":2,"parent":"iraq","children":["afak","al-diwaniyah","ash-shamiyah","nahiyat-ash-shinafiyah","nahiyat-ghammas"]});
export const childModules = Object.freeze({"afak":"./afak/afak.js","al-diwaniyah":"./al-diwaniyah/al-diwaniyah.js","ash-shamiyah":"./ash-shamiyah/ash-shamiyah.js","nahiyat-ash-shinafiyah":"./nahiyat-ash-shinafiyah/nahiyat-ash-shinafiyah.js","nahiyat-ghammas":"./nahiyat-ghammas/nahiyat-ghammas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
