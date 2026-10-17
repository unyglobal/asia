// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saudi-arabia","repository":"asia","path":"saudi-arabia","depth":1,"parent":"","children":["al-aqiq","al-aqiq-a","al-bahah-region","al-jawf-region","al-qassim-region","asir-region","eastern-province","ha-il-region","jazan-region","mecca-region","medina-region","najran-region","northern-borders-region","riyadh-region","tabuk-region"]});
export const childModules = Object.freeze({"al-aqiq":"./al-aqiq/al-aqiq.js","al-aqiq-a":"./al-aqiq-a/al-aqiq-a.js","al-bahah-region":"./al-bahah-region/al-bahah-region.js","al-jawf-region":"./al-jawf-region/al-jawf-region.js","al-qassim-region":"./al-qassim-region/al-qassim-region.js","asir-region":"./asir-region/asir-region.js","eastern-province":"./eastern-province/eastern-province.js","ha-il-region":"./ha-il-region/ha-il-region.js","jazan-region":"./jazan-region/jazan-region.js","mecca-region":"./mecca-region/mecca-region.js","medina-region":"./medina-region/medina-region.js","najran-region":"./najran-region/najran-region.js","northern-borders-region":"./northern-borders-region/northern-borders-region.js","riyadh-region":"./riyadh-region/riyadh-region.js","tabuk-region":"./tabuk-region/tabuk-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
