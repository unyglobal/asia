// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"diyala","repository":"asia","path":"iraq/diyala","depth":2,"parent":"iraq","children":["al-miqdadiyah","baqubah","habhab","khalis","khanaqin","kifri","mandali"]});
export const childModules = Object.freeze({"al-miqdadiyah":"./al-miqdadiyah/al-miqdadiyah.js","baqubah":"./baqubah/baqubah.js","habhab":"./habhab/habhab.js","khalis":"./khalis/khalis.js","khanaqin":"./khanaqin/khanaqin.js","kifri":"./kifri/kifri.js","mandali":"./mandali/mandali.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
