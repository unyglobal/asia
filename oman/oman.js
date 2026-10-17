// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oman","repository":"asia","path":"oman","depth":1,"parent":"","children":["ad-dakhiliyah","ad-dhahirah","al-batinah-north","al-batinah-south","al-buraimi","dhofar","musandam-governorate","muscat","northeastern-governorate","southeastern-governorate"]});
export const childModules = Object.freeze({"ad-dakhiliyah":"./ad-dakhiliyah/ad-dakhiliyah.js","ad-dhahirah":"./ad-dhahirah/ad-dhahirah.js","al-batinah-north":"./al-batinah-north/al-batinah-north.js","al-batinah-south":"./al-batinah-south/al-batinah-south.js","al-buraimi":"./al-buraimi/al-buraimi.js","dhofar":"./dhofar/dhofar.js","musandam-governorate":"./musandam-governorate/musandam-governorate.js","muscat":"./muscat/muscat.js","northeastern-governorate":"./northeastern-governorate/northeastern-governorate.js","southeastern-governorate":"./southeastern-governorate/southeastern-governorate.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
