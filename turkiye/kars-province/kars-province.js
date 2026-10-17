// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kars-province","repository":"asia","path":"turkiye/kars-province","depth":2,"parent":"turkiye","children":["kag-zman","kars","sahindere","sar-kam-s","sehitler"]});
export const childModules = Object.freeze({"kag-zman":"./kag-zman/kag-zman.js","kars":"./kars/kars.js","sahindere":"./sahindere/sahindere.js","sar-kam-s":"./sar-kam-s/sar-kam-s.js","sehitler":"./sehitler/sehitler.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
