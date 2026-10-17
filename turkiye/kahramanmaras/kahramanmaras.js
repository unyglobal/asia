// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kahramanmaras","repository":"asia","path":"turkiye/kahramanmaras","depth":2,"parent":"turkiye","children":["afsin","caglayancerit","elbistan","goksun","pazarc-k"]});
export const childModules = Object.freeze({"afsin":"./afsin/afsin.js","caglayancerit":"./caglayancerit/caglayancerit.js","elbistan":"./elbistan/elbistan.js","goksun":"./goksun/goksun.js","pazarc-k":"./pazarc-k/pazarc-k.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
