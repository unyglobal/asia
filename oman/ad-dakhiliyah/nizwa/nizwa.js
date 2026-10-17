// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nizwa","repository":"asia","path":"oman/ad-dakhiliyah/nizwa","depth":3,"parent":"oman/ad-dakhiliyah","children":["al-aqr","harat-al-wadi","sa-al"]});
export const childModules = Object.freeze({"al-aqr":"./al-aqr/al-aqr.js","harat-al-wadi":"./harat-al-wadi/harat-al-wadi.js","sa-al":"./sa-al/sa-al.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
