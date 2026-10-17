// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samarra","repository":"asia","path":"iraq/salah-ad-din/samarra","depth":3,"parent":"iraq/salah-ad-din","children":["al-gharbiyah","al-mu-allimin","al-mu-tasim","as-sikak","hayy-ad-dubbat"]});
export const childModules = Object.freeze({"al-gharbiyah":"./al-gharbiyah/al-gharbiyah.js","al-mu-allimin":"./al-mu-allimin/al-mu-allimin.js","al-mu-tasim":"./al-mu-tasim/al-mu-tasim.js","as-sikak":"./as-sikak/as-sikak.js","hayy-ad-dubbat":"./hayy-ad-dubbat/hayy-ad-dubbat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
