// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"damascus","repository":"asia","path":"syria/damascus-governorate/damascus","depth":3,"parent":"syria/damascus-governorate","children":["al-baramikah","al-hijaz","al-hububi","al-qanawat","bab-sarijah","bahsah-sinjaqdar","bawwabat-as-salihiyah","birkat-hattab","itfa-eya","qabr-atikah","saruja","shrebishat"]});
export const childModules = Object.freeze({"al-baramikah":"./al-baramikah/al-baramikah.js","al-hijaz":"./al-hijaz/al-hijaz.js","al-hububi":"./al-hububi/al-hububi.js","al-qanawat":"./al-qanawat/al-qanawat.js","bab-sarijah":"./bab-sarijah/bab-sarijah.js","bahsah-sinjaqdar":"./bahsah-sinjaqdar/bahsah-sinjaqdar.js","bawwabat-as-salihiyah":"./bawwabat-as-salihiyah/bawwabat-as-salihiyah.js","birkat-hattab":"./birkat-hattab/birkat-hattab.js","itfa-eya":"./itfa-eya/itfa-eya.js","qabr-atikah":"./qabr-atikah/qabr-atikah.js","saruja":"./saruja/saruja.js","shrebishat":"./shrebishat/shrebishat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
