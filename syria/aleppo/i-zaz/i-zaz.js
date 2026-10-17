// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"i-zaz","repository":"asia","path":"syria/aleppo/i-zaz","depth":3,"parent":"syria/aleppo","children":["hayy-al-hurriyah","hayy-al-ittihad","hayy-al-maydan","hayy-al-urubah"]});
export const childModules = Object.freeze({"hayy-al-hurriyah":"./hayy-al-hurriyah/hayy-al-hurriyah.js","hayy-al-ittihad":"./hayy-al-ittihad/hayy-al-ittihad.js","hayy-al-maydan":"./hayy-al-maydan/hayy-al-maydan.js","hayy-al-urubah":"./hayy-al-urubah/hayy-al-urubah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
