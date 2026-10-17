// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ikeda","repository":"asia","path":"japan/osaka/ikeda","depth":3,"parent":"japan/osaka","children":["ayaha","hachioji","jonan","momozono","satsukigaoka","ueikeda"]});
export const childModules = Object.freeze({"ayaha":"./ayaha/ayaha.js","hachioji":"./hachioji/hachioji.js","jonan":"./jonan/jonan.js","momozono":"./momozono/momozono.js","satsukigaoka":"./satsukigaoka/satsukigaoka.js","ueikeda":"./ueikeda/ueikeda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
