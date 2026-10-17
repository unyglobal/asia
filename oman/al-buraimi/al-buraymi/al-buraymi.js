// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-buraymi","repository":"asia","path":"oman/al-buraimi/al-buraymi","depth":3,"parent":"oman/al-buraimi","children":["al-khadra-al-qadimah","harat-ash-shari-ah","sa-ra-al-qadimah"]});
export const childModules = Object.freeze({"al-khadra-al-qadimah":"./al-khadra-al-qadimah/al-khadra-al-qadimah.js","harat-ash-shari-ah":"./harat-ash-shari-ah/harat-ash-shari-ah.js","sa-ra-al-qadimah":"./sa-ra-al-qadimah/sa-ra-al-qadimah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
