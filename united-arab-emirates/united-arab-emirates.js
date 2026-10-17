// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"united-arab-emirates","repository":"asia","path":"united-arab-emirates","depth":1,"parent":"","children":["abu-dhabi","ajman","al-qusais","dubai","fujairah","ras-al-khaimah","sharjah","umm-al-quwain"]});
export const childModules = Object.freeze({"abu-dhabi":"./abu-dhabi/abu-dhabi.js","ajman":"./ajman/ajman.js","al-qusais":"./al-qusais/al-qusais.js","dubai":"./dubai/dubai.js","fujairah":"./fujairah/fujairah.js","ras-al-khaimah":"./ras-al-khaimah/ras-al-khaimah.js","sharjah":"./sharjah/sharjah.js","umm-al-quwain":"./umm-al-quwain/umm-al-quwain.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
