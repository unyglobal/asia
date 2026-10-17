// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"syria","repository":"asia","path":"syria","depth":1,"parent":"","children":["al-hasakah","aleppo","damascus-governorate","daraa","deir-ez-zor","hama","homs","idlib","latakia","quneitra","raqqa","rif-dimashq","suwayda","tartus"]});
export const childModules = Object.freeze({"al-hasakah":"./al-hasakah/al-hasakah.js","aleppo":"./aleppo/aleppo.js","damascus-governorate":"./damascus-governorate/damascus-governorate.js","daraa":"./daraa/daraa.js","deir-ez-zor":"./deir-ez-zor/deir-ez-zor.js","hama":"./hama/hama.js","homs":"./homs/homs.js","idlib":"./idlib/idlib.js","latakia":"./latakia/latakia.js","quneitra":"./quneitra/quneitra.js","raqqa":"./raqqa/raqqa.js","rif-dimashq":"./rif-dimashq/rif-dimashq.js","suwayda":"./suwayda/suwayda.js","tartus":"./tartus/tartus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
