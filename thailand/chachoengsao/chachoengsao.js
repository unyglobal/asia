// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chachoengsao","repository":"asia","path":"thailand/chachoengsao","depth":2,"parent":"thailand","children":["bang-pakong","phanom-sarakham"]});
export const childModules = Object.freeze({"bang-pakong":"./bang-pakong/bang-pakong.js","phanom-sarakham":"./phanom-sarakham/phanom-sarakham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
