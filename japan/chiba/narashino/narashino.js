// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"narashino","repository":"asia","path":"japan/chiba/narashino","depth":3,"parent":"japan/chiba","children":["hanasaki","motookubo"]});
export const childModules = Object.freeze({"hanasaki":"./hanasaki/hanasaki.js","motookubo":"./motookubo/motookubo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
