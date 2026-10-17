// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baniyas","repository":"asia","path":"syria/tartus/baniyas","depth":3,"parent":"syria/tartus","children":["hayy-al-markaz","hayy-al-maydan"]});
export const childModules = Object.freeze({"hayy-al-markaz":"./hayy-al-markaz/hayy-al-markaz.js","hayy-al-maydan":"./hayy-al-maydan/hayy-al-maydan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
