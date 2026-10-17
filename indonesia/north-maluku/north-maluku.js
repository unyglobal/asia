// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-maluku","repository":"asia","path":"indonesia/north-maluku","depth":2,"parent":"indonesia","children":["daruba","kawasi","sanana","sofifi","ternate","tobelo"]});
export const childModules = Object.freeze({"daruba":"./daruba/daruba.js","kawasi":"./kawasi/kawasi.js","sanana":"./sanana/sanana.js","sofifi":"./sofifi/sofifi.js","ternate":"./ternate/ternate.js","tobelo":"./tobelo/tobelo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
