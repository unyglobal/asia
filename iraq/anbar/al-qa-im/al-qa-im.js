// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-qa-im","repository":"asia","path":"iraq/anbar/al-qa-im","depth":3,"parent":"iraq/anbar","children":["al-jam-iyah","al-jamahir","al-yarmuk","as-salam","as-suwayhil","at-ta-mim","rabi-al-awwal"]});
export const childModules = Object.freeze({"al-jam-iyah":"./al-jam-iyah/al-jam-iyah.js","al-jamahir":"./al-jamahir/al-jamahir.js","al-yarmuk":"./al-yarmuk/al-yarmuk.js","as-salam":"./as-salam/as-salam.js","as-suwayhil":"./as-suwayhil/as-suwayhil.js","at-ta-mim":"./at-ta-mim/at-ta-mim.js","rabi-al-awwal":"./rabi-al-awwal/rabi-al-awwal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
