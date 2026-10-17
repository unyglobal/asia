// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ath-thumamah-sab-ah-wa-arba-un","repository":"asia","path":"qatar/baladiyat-ad-dawhah/ath-thumamah-sab-ah-wa-arba-un","depth":3,"parent":"qatar/baladiyat-ad-dawhah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
