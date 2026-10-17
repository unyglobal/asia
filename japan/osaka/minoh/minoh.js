// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minoh","repository":"asia","path":"japan/osaka/minoh","depth":3,"parent":"japan/osaka","children":["boshima","hyakurakuso","ina","nishishoji","sakura"]});
export const childModules = Object.freeze({"boshima":"./boshima/boshima.js","hyakurakuso":"./hyakurakuso/hyakurakuso.js","ina":"./ina/ina.js","nishishoji":"./nishishoji/nishishoji.js","sakura":"./sakura/sakura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
