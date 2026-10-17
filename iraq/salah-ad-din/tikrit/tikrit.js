// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tikrit","repository":"asia","path":"iraq/salah-ad-din/tikrit","depth":3,"parent":"iraq/salah-ad-din","children":["al-baladiyat","ash-shuhada","salah-ad-din"]});
export const childModules = Object.freeze({"al-baladiyat":"./al-baladiyat/al-baladiyat.js","ash-shuhada":"./ash-shuhada/ash-shuhada.js","salah-ad-din":"./salah-ad-din/salah-ad-din.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
