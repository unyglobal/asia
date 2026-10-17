// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qusayr","repository":"asia","path":"syria/homs/al-qusayr","depth":3,"parent":"syria/homs","children":["al-harah-ash-gharbiyah","hayy-al-mal-ab","hayy-bayn-as-sikkatayn","hayy-masakin-al-mu-allimin","ramzun"]});
export const childModules = Object.freeze({"al-harah-ash-gharbiyah":"./al-harah-ash-gharbiyah/al-harah-ash-gharbiyah.js","hayy-al-mal-ab":"./hayy-al-mal-ab/hayy-al-mal-ab.js","hayy-bayn-as-sikkatayn":"./hayy-bayn-as-sikkatayn/hayy-bayn-as-sikkatayn.js","hayy-masakin-al-mu-allimin":"./hayy-masakin-al-mu-allimin/hayy-masakin-al-mu-allimin.js","ramzun":"./ramzun/ramzun.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
