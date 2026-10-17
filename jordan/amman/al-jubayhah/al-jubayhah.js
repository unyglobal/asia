// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-jubayhah","repository":"asia","path":"jordan/amman/al-jubayhah","depth":3,"parent":"jordan/amman","children":["hayy-al-jubayhah","khirbat-siran"]});
export const childModules = Object.freeze({"hayy-al-jubayhah":"./hayy-al-jubayhah/hayy-al-jubayhah.js","khirbat-siran":"./khirbat-siran/khirbat-siran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
