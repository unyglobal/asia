// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aleppo","repository":"asia","path":"syria/aleppo","depth":2,"parent":"syria","children":["afrin","al-bab","as-safirah","ayn-al-arab","batabo","dayr-hafir","i-zaz","jarabulus","kabbasin","manbij","nubl","tadif","tall-rif-at"]});
export const childModules = Object.freeze({"afrin":"./afrin/afrin.js","al-bab":"./al-bab/al-bab.js","as-safirah":"./as-safirah/as-safirah.js","ayn-al-arab":"./ayn-al-arab/ayn-al-arab.js","batabo":"./batabo/batabo.js","dayr-hafir":"./dayr-hafir/dayr-hafir.js","i-zaz":"./i-zaz/i-zaz.js","jarabulus":"./jarabulus/jarabulus.js","kabbasin":"./kabbasin/kabbasin.js","manbij":"./manbij/manbij.js","nubl":"./nubl/nubl.js","tadif":"./tadif/tadif.js","tall-rif-at":"./tall-rif-at/tall-rif-at.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
