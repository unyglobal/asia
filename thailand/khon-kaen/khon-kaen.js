// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khon-kaen","repository":"asia","path":"thailand/khon-kaen","depth":2,"parent":"thailand","children":["ban-phai","chum-phae"]});
export const childModules = Object.freeze({"ban-phai":"./ban-phai/ban-phai.js","chum-phae":"./chum-phae/chum-phae.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
