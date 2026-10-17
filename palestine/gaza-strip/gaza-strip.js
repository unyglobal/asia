// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gaza-strip","repository":"asia","path":"palestine/gaza-strip","depth":2,"parent":"palestine","children":["abasan-al-kabirah","al-burayj","al-qararah","an-nusayrat","az-zuwaydah","bani-suhayla","bayt-hanun","bayt-lahya","dayr-al-balah","gaza","jabalya","khan-yunis","rafah"]});
export const childModules = Object.freeze({"abasan-al-kabirah":"./abasan-al-kabirah/abasan-al-kabirah.js","al-burayj":"./al-burayj/al-burayj.js","al-qararah":"./al-qararah/al-qararah.js","an-nusayrat":"./an-nusayrat/an-nusayrat.js","az-zuwaydah":"./az-zuwaydah/az-zuwaydah.js","bani-suhayla":"./bani-suhayla/bani-suhayla.js","bayt-hanun":"./bayt-hanun/bayt-hanun.js","bayt-lahya":"./bayt-lahya/bayt-lahya.js","dayr-al-balah":"./dayr-al-balah/dayr-al-balah.js","gaza":"./gaza/gaza.js","jabalya":"./jabalya/jabalya.js","khan-yunis":"./khan-yunis/khan-yunis.js","rafah":"./rafah/rafah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
