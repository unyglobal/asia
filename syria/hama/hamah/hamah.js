// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamah","repository":"asia","path":"syria/hama/hamah","depth":3,"parent":"syria/hama","children":["al-barudiyah","al-bashurah","al-farrayah","al-ulayliyat","ash-shamaliyah","az-zanbaqi","disaghah"]});
export const childModules = Object.freeze({"al-barudiyah":"./al-barudiyah/al-barudiyah.js","al-bashurah":"./al-bashurah/al-bashurah.js","al-farrayah":"./al-farrayah/al-farrayah.js","al-ulayliyat":"./al-ulayliyat/al-ulayliyat.js","ash-shamaliyah":"./ash-shamaliyah/ash-shamaliyah.js","az-zanbaqi":"./az-zanbaqi/az-zanbaqi.js","disaghah":"./disaghah/disaghah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
