// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-sulawesi","repository":"asia","path":"indonesia/south-sulawesi","depth":2,"parent":"indonesia","children":["galesong","makassar","maros","masamba","palopo","parepare","rantepao","sengkang","sinjai","watampone"]});
export const childModules = Object.freeze({"galesong":"./galesong/galesong.js","makassar":"./makassar/makassar.js","maros":"./maros/maros.js","masamba":"./masamba/masamba.js","palopo":"./palopo/palopo.js","parepare":"./parepare/parepare.js","rantepao":"./rantepao/rantepao.js","sengkang":"./sengkang/sengkang.js","sinjai":"./sinjai/sinjai.js","watampone":"./watampone/watampone.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
