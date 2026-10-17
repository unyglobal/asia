// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bandar-abbas","repository":"asia","path":"iran/hormozgan/bandar-abbas","depth":3,"parent":"iran/hormozgan","children":["baluchha","berkeh-gord","chahar-bagh","kargozari","mahalleh-ye-gur-e-farang","mahalleh-ye-lariha","mahalleh-ye-sar-rig","nazarabad","posht-e-band","seyyed-kamel","shah-hoseyni","siahha"]});
export const childModules = Object.freeze({"baluchha":"./baluchha/baluchha.js","berkeh-gord":"./berkeh-gord/berkeh-gord.js","chahar-bagh":"./chahar-bagh/chahar-bagh.js","kargozari":"./kargozari/kargozari.js","mahalleh-ye-gur-e-farang":"./mahalleh-ye-gur-e-farang/mahalleh-ye-gur-e-farang.js","mahalleh-ye-lariha":"./mahalleh-ye-lariha/mahalleh-ye-lariha.js","mahalleh-ye-sar-rig":"./mahalleh-ye-sar-rig/mahalleh-ye-sar-rig.js","nazarabad":"./nazarabad/nazarabad.js","posht-e-band":"./posht-e-band/posht-e-band.js","seyyed-kamel":"./seyyed-kamel/seyyed-kamel.js","shah-hoseyni":"./shah-hoseyni/shah-hoseyni.js","siahha":"./siahha/siahha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
