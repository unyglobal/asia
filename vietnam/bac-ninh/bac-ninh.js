// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bac-ninh","repository":"asia","path":"vietnam/bac-ninh","depth":2,"parent":"vietnam","children":["bac-giang","chu","cung-kiem","thuan-thanh","tu-son","viet-yen"]});
export const childModules = Object.freeze({"bac-giang":"./bac-giang/bac-giang.js","chu":"./chu/chu.js","cung-kiem":"./cung-kiem/cung-kiem.js","thuan-thanh":"./thuan-thanh/thuan-thanh.js","tu-son":"./tu-son/tu-son.js","viet-yen":"./viet-yen/viet-yen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
