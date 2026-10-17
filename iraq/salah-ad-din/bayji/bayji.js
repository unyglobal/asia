// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayji","repository":"asia","path":"iraq/salah-ad-din/bayji","depth":3,"parent":"iraq/salah-ad-din","children":["al-ba-th","al-jami","al-khadra","tall-az-za-tar"]});
export const childModules = Object.freeze({"al-ba-th":"./al-ba-th/al-ba-th.js","al-jami":"./al-jami/al-jami.js","al-khadra":"./al-khadra/al-khadra.js","tall-az-za-tar":"./tall-az-za-tar/tall-az-za-tar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
