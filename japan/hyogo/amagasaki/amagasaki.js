// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amagasaki","repository":"asia","path":"japan/hyogo/amagasaki","depth":3,"parent":"japan/hyogo","children":["daimotsucho","higashidaimotsucho","showadori","tsukiji"]});
export const childModules = Object.freeze({"daimotsucho":"./daimotsucho/daimotsucho.js","higashidaimotsucho":"./higashidaimotsucho/higashidaimotsucho.js","showadori":"./showadori/showadori.js","tsukiji":"./tsukiji/tsukiji.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
