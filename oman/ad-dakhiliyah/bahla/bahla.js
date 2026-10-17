// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bahla","repository":"asia","path":"oman/ad-dakhiliyah/bahla","depth":3,"parent":"oman/ad-dakhiliyah","children":["al-ghaf","ilayat-bahla"]});
export const childModules = Object.freeze({"al-ghaf":"./al-ghaf/al-ghaf.js","ilayat-bahla":"./ilayat-bahla/ilayat-bahla.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
