// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hakkari","repository":"asia","path":"turkiye/hakkari","depth":2,"parent":"turkiye","children":["semdinli","yuksekova"]});
export const childModules = Object.freeze({"semdinli":"./semdinli/semdinli.js","yuksekova":"./yuksekova/yuksekova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
