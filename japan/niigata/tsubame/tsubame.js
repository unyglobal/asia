// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tsubame","repository":"asia","path":"japan/niigata/tsubame","depth":3,"parent":"japan/niigata","children":["akibacho","chuodori","hakusancho","honcho","minami","tonoshima"]});
export const childModules = Object.freeze({"akibacho":"./akibacho/akibacho.js","chuodori":"./chuodori/chuodori.js","hakusancho":"./hakusancho/hakusancho.js","honcho":"./honcho/honcho.js","minami":"./minami/minami.js","tonoshima":"./tonoshima/tonoshima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
