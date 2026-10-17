// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-fallujah","repository":"asia","path":"iraq/anbar/al-fallujah","depth":3,"parent":"iraq/anbar","children":["al-mu-allimin-al-ula","civilian-district","nazzal"]});
export const childModules = Object.freeze({"al-mu-allimin-al-ula":"./al-mu-allimin-al-ula/al-mu-allimin-al-ula.js","civilian-district":"./civilian-district/civilian-district.js","nazzal":"./nazzal/nazzal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
