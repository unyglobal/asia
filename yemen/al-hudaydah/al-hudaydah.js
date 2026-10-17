// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-hudaydah","repository":"asia","path":"yemen/al-hudaydah","depth":2,"parent":"yemen","children":["bajil","bayt-al-faqih","zabid"]});
export const childModules = Object.freeze({"bajil":"./bajil/bajil.js","bayt-al-faqih":"./bayt-al-faqih/bayt-al-faqih.js","zabid":"./zabid/zabid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
