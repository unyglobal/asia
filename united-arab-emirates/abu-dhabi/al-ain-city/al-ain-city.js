// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-ain-city","repository":"asia","path":"united-arab-emirates/abu-dhabi/al-ain-city","depth":3,"parent":"united-arab-emirates/abu-dhabi","children":["al-safrah","batha-al-hayer"]});
export const childModules = Object.freeze({"al-safrah":"./al-safrah/al-safrah.js","batha-al-hayer":"./batha-al-hayer/batha-al-hayer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
