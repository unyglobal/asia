// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chaiyaphum","repository":"asia","path":"thailand/chaiyaphum","depth":2,"parent":"thailand","children":["kaeng-khro","kaset-sombun","phu-khiao"]});
export const childModules = Object.freeze({"kaeng-khro":"./kaeng-khro/kaeng-khro.js","kaset-sombun":"./kaset-sombun/kaset-sombun.js","phu-khiao":"./phu-khiao/phu-khiao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
