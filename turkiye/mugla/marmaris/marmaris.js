// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marmaris","repository":"asia","path":"turkiye/mugla/marmaris","depth":3,"parent":"turkiye/mugla","children":["kemeralt-mahallesi","sar-ana-mahallesi","tepe-mahallesi"]});
export const childModules = Object.freeze({"kemeralt-mahallesi":"./kemeralt-mahallesi/kemeralt-mahallesi.js","sar-ana-mahallesi":"./sar-ana-mahallesi/sar-ana-mahallesi.js","tepe-mahallesi":"./tepe-mahallesi/tepe-mahallesi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
