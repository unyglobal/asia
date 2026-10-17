// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tianjin","repository":"asia","path":"china/tianjin","depth":2,"parent":"china","children":["hangu","sino-singapore-tianjin-eco-city","tanggu","xianshuigu","yangcun","yangliuqing"]});
export const childModules = Object.freeze({"hangu":"./hangu/hangu.js","sino-singapore-tianjin-eco-city":"./sino-singapore-tianjin-eco-city/sino-singapore-tianjin-eco-city.js","tanggu":"./tanggu/tanggu.js","xianshuigu":"./xianshuigu/xianshuigu.js","yangcun":"./yangcun/yangcun.js","yangliuqing":"./yangliuqing/yangliuqing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
