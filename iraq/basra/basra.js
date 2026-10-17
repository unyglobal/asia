// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"basra","repository":"asia","path":"iraq/basra","depth":2,"parent":"iraq","children":["abu-al-kahsib","al-faw","al-harithah","al-madinah","al-qurnah","az-zubayr","basrah","safwan","umm-qasr"]});
export const childModules = Object.freeze({"abu-al-kahsib":"./abu-al-kahsib/abu-al-kahsib.js","al-faw":"./al-faw/al-faw.js","al-harithah":"./al-harithah/al-harithah.js","al-madinah":"./al-madinah/al-madinah.js","al-qurnah":"./al-qurnah/al-qurnah.js","az-zubayr":"./az-zubayr/az-zubayr.js","basrah":"./basrah/basrah.js","safwan":"./safwan/safwan.js","umm-qasr":"./umm-qasr/umm-qasr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
