// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramadi","repository":"asia","path":"iraq/anbar/ramadi","depth":3,"parent":"iraq/anbar","children":["al-andalus","al-jumhuri","al-mu-allimin","ar-rifa-i","shurta-district"]});
export const childModules = Object.freeze({"al-andalus":"./al-andalus/al-andalus.js","al-jumhuri":"./al-jumhuri/al-jumhuri.js","al-mu-allimin":"./al-mu-allimin/al-mu-allimin.js","ar-rifa-i":"./ar-rifa-i/ar-rifa-i.js","shurta-district":"./shurta-district/shurta-district.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
