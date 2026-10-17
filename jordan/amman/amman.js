// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amman","repository":"asia","path":"jordan/amman","depth":2,"parent":"jordan","children":["al-jubayhah","hayy-al-quwaysimah","hayy-khilda","khuraybat-as-suq","marj-al-hamam","sahab","umm-as-summaq","wadi-as-sir"]});
export const childModules = Object.freeze({"al-jubayhah":"./al-jubayhah/al-jubayhah.js","hayy-al-quwaysimah":"./hayy-al-quwaysimah/hayy-al-quwaysimah.js","hayy-khilda":"./hayy-khilda/hayy-khilda.js","khuraybat-as-suq":"./khuraybat-as-suq/khuraybat-as-suq.js","marj-al-hamam":"./marj-al-hamam/marj-al-hamam.js","sahab":"./sahab/sahab.js","umm-as-summaq":"./umm-as-summaq/umm-as-summaq.js","wadi-as-sir":"./wadi-as-sir/wadi-as-sir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
