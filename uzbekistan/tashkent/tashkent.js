// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tashkent","repository":"asia","path":"uzbekistan/tashkent","depth":2,"parent":"uzbekistan","children":["bektemir","chilanzar","sergeli","yunusobod"]});
export const childModules = Object.freeze({"bektemir":"./bektemir/bektemir.js","chilanzar":"./chilanzar/chilanzar.js","sergeli":"./sergeli/sergeli.js","yunusobod":"./yunusobod/yunusobod.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
