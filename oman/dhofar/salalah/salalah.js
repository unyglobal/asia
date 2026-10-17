// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salalah","repository":"asia","path":"oman/dhofar/salalah","depth":3,"parent":"oman/dhofar","children":["east-salalah","markaz-al-madinah","salalah-al-gharbiyah","salalah-al-wusta"]});
export const childModules = Object.freeze({"east-salalah":"./east-salalah/east-salalah.js","markaz-al-madinah":"./markaz-al-madinah/markaz-al-madinah.js","salalah-al-gharbiyah":"./salalah-al-gharbiyah/salalah-al-gharbiyah.js","salalah-al-wusta":"./salalah-al-wusta/salalah-al-wusta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
