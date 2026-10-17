// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"umm-al-quwain-city","repository":"asia","path":"united-arab-emirates/umm-al-quwain/umm-al-quwain-city","depth":3,"parent":"united-arab-emirates/umm-al-quwain","children":["mintaqat-ad-dar-al-bayda-a","mintaqat-al-khawr","mintaqat-ar-ra-s-a","mintaqat-ar-ra-s-b","mintaqat-ar-ra-s-d","mintaqat-ar-ra-s-j","mintaqat-ar-riqqah","mintaqat-umm-al-qaywayn-at-tibbiyah"]});
export const childModules = Object.freeze({"mintaqat-ad-dar-al-bayda-a":"./mintaqat-ad-dar-al-bayda-a/mintaqat-ad-dar-al-bayda-a.js","mintaqat-al-khawr":"./mintaqat-al-khawr/mintaqat-al-khawr.js","mintaqat-ar-ra-s-a":"./mintaqat-ar-ra-s-a/mintaqat-ar-ra-s-a.js","mintaqat-ar-ra-s-b":"./mintaqat-ar-ra-s-b/mintaqat-ar-ra-s-b.js","mintaqat-ar-ra-s-d":"./mintaqat-ar-ra-s-d/mintaqat-ar-ra-s-d.js","mintaqat-ar-ra-s-j":"./mintaqat-ar-ra-s-j/mintaqat-ar-ra-s-j.js","mintaqat-ar-riqqah":"./mintaqat-ar-riqqah/mintaqat-ar-riqqah.js","mintaqat-umm-al-qaywayn-at-tibbiyah":"./mintaqat-umm-al-qaywayn-at-tibbiyah/mintaqat-umm-al-qaywayn-at-tibbiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
