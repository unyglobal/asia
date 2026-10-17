// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayt-al-faqih","repository":"asia","path":"yemen/al-hudaydah/bayt-al-faqih","depth":3,"parent":"yemen/al-hudaydah","children":["al-hawk","al-hawk-as-sufla","al-hunud","al-mahazirah","al-maybalah","as-salifin","ash-shammah","bani-al-qamari","somani"]});
export const childModules = Object.freeze({"al-hawk":"./al-hawk/al-hawk.js","al-hawk-as-sufla":"./al-hawk-as-sufla/al-hawk-as-sufla.js","al-hunud":"./al-hunud/al-hunud.js","al-mahazirah":"./al-mahazirah/al-mahazirah.js","al-maybalah":"./al-maybalah/al-maybalah.js","as-salifin":"./as-salifin/as-salifin.js","ash-shammah":"./ash-shammah/ash-shammah.js","bani-al-qamari":"./bani-al-qamari/bani-al-qamari.js","somani":"./somani/somani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
