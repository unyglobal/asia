// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jasim","repository":"asia","path":"syria/daraa/jasim","depth":3,"parent":"syria/daraa","children":["aradi-bay-al-hanan","kurum-al-wadi"]});
export const childModules = Object.freeze({"aradi-bay-al-hanan":"./aradi-bay-al-hanan/aradi-bay-al-hanan.js","kurum-al-wadi":"./kurum-al-wadi/kurum-al-wadi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
