// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-salt","repository":"asia","path":"jordan/balqa/as-salt","depth":3,"parent":"jordan/balqa","children":["hayy-al-baqi","hayy-al-iskan","hayy-al-izariyah","hayy-al-jad-ah","hayy-al-khandaq","hayy-al-manshiyah","hayy-al-maydan","hayy-al-qal-ah","hayy-wadi-al-akrad","hayy-wadi-al-halabi"]});
export const childModules = Object.freeze({"hayy-al-baqi":"./hayy-al-baqi/hayy-al-baqi.js","hayy-al-iskan":"./hayy-al-iskan/hayy-al-iskan.js","hayy-al-izariyah":"./hayy-al-izariyah/hayy-al-izariyah.js","hayy-al-jad-ah":"./hayy-al-jad-ah/hayy-al-jad-ah.js","hayy-al-khandaq":"./hayy-al-khandaq/hayy-al-khandaq.js","hayy-al-manshiyah":"./hayy-al-manshiyah/hayy-al-manshiyah.js","hayy-al-maydan":"./hayy-al-maydan/hayy-al-maydan.js","hayy-al-qal-ah":"./hayy-al-qal-ah/hayy-al-qal-ah.js","hayy-wadi-al-akrad":"./hayy-wadi-al-akrad/hayy-wadi-al-akrad.js","hayy-wadi-al-halabi":"./hayy-wadi-al-halabi/hayy-wadi-al-halabi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
