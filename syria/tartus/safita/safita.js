// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"safita","repository":"asia","path":"syria/tartus/safita","depth":3,"parent":"syria/tartus","children":["al-hayy-al-gharbi","al-hayy-ash-sharqi","hayy-al-qa-ah","hayy-at-tall"]});
export const childModules = Object.freeze({"al-hayy-al-gharbi":"./al-hayy-al-gharbi/al-hayy-al-gharbi.js","al-hayy-ash-sharqi":"./al-hayy-ash-sharqi/al-hayy-ash-sharqi.js","hayy-al-qa-ah":"./hayy-al-qa-ah/hayy-al-qa-ah.js","hayy-at-tall":"./hayy-at-tall/hayy-at-tall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
