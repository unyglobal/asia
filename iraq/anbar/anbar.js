// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anbar","repository":"asia","path":"iraq/anbar","depth":2,"parent":"iraq","children":["al-fallujah","al-qa-im","anah","anat-al-qadimah","ar-rutbah","hadithah","hit","ramadi"]});
export const childModules = Object.freeze({"al-fallujah":"./al-fallujah/al-fallujah.js","al-qa-im":"./al-qa-im/al-qa-im.js","anah":"./anah/anah.js","anat-al-qadimah":"./anat-al-qadimah/anat-al-qadimah.js","ar-rutbah":"./ar-rutbah/ar-rutbah.js","hadithah":"./hadithah/hadithah.js","hit":"./hit/hit.js","ramadi":"./ramadi/ramadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
