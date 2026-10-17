// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-yarmuk","repository":"asia","path":"syria/damascus-governorate/al-yarmuk","depth":3,"parent":"syria/damascus-governorate","children":["al-baytar","al-falujah","al-jalil","al-karamah","al-karmal","al-quds","al-urubah","an-naqb","an-nasirah","basatin-ash-shaghur","bi-r-as-sab","hittin","jurat-ash-sharibati","tabariya"]});
export const childModules = Object.freeze({"al-baytar":"./al-baytar/al-baytar.js","al-falujah":"./al-falujah/al-falujah.js","al-jalil":"./al-jalil/al-jalil.js","al-karamah":"./al-karamah/al-karamah.js","al-karmal":"./al-karmal/al-karmal.js","al-quds":"./al-quds/al-quds.js","al-urubah":"./al-urubah/al-urubah.js","an-naqb":"./an-naqb/an-naqb.js","an-nasirah":"./an-nasirah/an-nasirah.js","basatin-ash-shaghur":"./basatin-ash-shaghur/basatin-ash-shaghur.js","bi-r-as-sab":"./bi-r-as-sab/bi-r-as-sab.js","hittin":"./hittin/hittin.js","jurat-ash-sharibati":"./jurat-ash-sharibati/jurat-ash-sharibati.js","tabariya":"./tabariya/tabariya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
