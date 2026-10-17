// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"najran-region","repository":"asia","path":"saudi-arabia/najran-region","depth":2,"parent":"saudi-arabia","children":["al-mash-iliyah","najran"]});
export const childModules = Object.freeze({"al-mash-iliyah":"./al-mash-iliyah/al-mash-iliyah.js","najran":"./najran/najran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
