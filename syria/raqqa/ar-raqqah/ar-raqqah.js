// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ar-raqqah","repository":"asia","path":"syria/raqqa/ar-raqqah","depth":3,"parent":"syria/raqqa","children":["hayy-al-hana","hayy-al-hurriyah","hayy-al-mansur"]});
export const childModules = Object.freeze({"hayy-al-hana":"./hayy-al-hana/hayy-al-hana.js","hayy-al-hurriyah":"./hayy-al-hurriyah/hayy-al-hurriyah.js","hayy-al-mansur":"./hayy-al-mansur/hayy-al-mansur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
