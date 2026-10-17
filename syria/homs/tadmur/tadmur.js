// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tadmur","repository":"asia","path":"syria/homs/tadmur","depth":3,"parent":"syria/homs","children":["hayy-ad-dahiriyah","hayy-al-ghutah","hayy-an-nasr","hayy-udhaynah","hayy-zanubiya"]});
export const childModules = Object.freeze({"hayy-ad-dahiriyah":"./hayy-ad-dahiriyah/hayy-ad-dahiriyah.js","hayy-al-ghutah":"./hayy-al-ghutah/hayy-al-ghutah.js","hayy-an-nasr":"./hayy-an-nasr/hayy-an-nasr.js","hayy-udhaynah":"./hayy-udhaynah/hayy-udhaynah.js","hayy-zanubiya":"./hayy-zanubiya/hayy-zanubiya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
