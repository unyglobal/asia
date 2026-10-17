// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fujieda","repository":"asia","path":"japan/shizuoka/fujieda","depth":3,"parent":"japan/shizuoka","children":["hommachi","kori","okadeyama","ote"]});
export const childModules = Object.freeze({"hommachi":"./hommachi/hommachi.js","kori":"./kori/kori.js","okadeyama":"./okadeyama/okadeyama.js","ote":"./ote/ote.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
