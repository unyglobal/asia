// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dayr-al-balah","repository":"asia","path":"palestine/gaza-strip/dayr-al-balah","depth":3,"parent":"palestine/gaza-strip","children":["al-amrah","al-baldah-al-qadimah","al-hadabah","al-harah-ash-sharqiyah","al-masihi","al-mattayin","ar-rasm","bisharah","hamadah","qa-ud","tunis"]});
export const childModules = Object.freeze({"al-amrah":"./al-amrah/al-amrah.js","al-baldah-al-qadimah":"./al-baldah-al-qadimah/al-baldah-al-qadimah.js","al-hadabah":"./al-hadabah/al-hadabah.js","al-harah-ash-sharqiyah":"./al-harah-ash-sharqiyah/al-harah-ash-sharqiyah.js","al-masihi":"./al-masihi/al-masihi.js","al-mattayin":"./al-mattayin/al-mattayin.js","ar-rasm":"./ar-rasm/ar-rasm.js","bisharah":"./bisharah/bisharah.js","hamadah":"./hamadah/hamadah.js","qa-ud":"./qa-ud/qa-ud.js","tunis":"./tunis/tunis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
