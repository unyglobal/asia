// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kudamatsu","repository":"asia","path":"japan/yamaguchi/kudamatsu","depth":3,"parent":"japan/yamaguchi","children":["furukawacho","higashiyanagi","nakaichi","otemachi","sakaemachi","sakuracho","shinkawa"]});
export const childModules = Object.freeze({"furukawacho":"./furukawacho/furukawacho.js","higashiyanagi":"./higashiyanagi/higashiyanagi.js","nakaichi":"./nakaichi/nakaichi.js","otemachi":"./otemachi/otemachi.js","sakaemachi":"./sakaemachi/sakaemachi.js","sakuracho":"./sakuracho/sakuracho.js","shinkawa":"./shinkawa/shinkawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
