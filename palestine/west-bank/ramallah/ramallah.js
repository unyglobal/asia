// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ramallah","repository":"asia","path":"palestine/west-bank/ramallah","depth":3,"parent":"palestine/west-bank","children":["hayy-al-basus","hayy-dar-awwad"]});
export const childModules = Object.freeze({"hayy-al-basus":"./hayy-al-basus/hayy-al-basus.js","hayy-dar-awwad":"./hayy-dar-awwad/hayy-dar-awwad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
