// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mie","repository":"asia","path":"japan/mie","depth":2,"parent":"japan","children":["nabari","owase","saiku","shima","suzuka","tamaru","toba","toin","toyoda","tsu","ueno-ebisumachi"]});
export const childModules = Object.freeze({"nabari":"./nabari/nabari.js","owase":"./owase/owase.js","saiku":"./saiku/saiku.js","shima":"./shima/shima.js","suzuka":"./suzuka/suzuka.js","tamaru":"./tamaru/tamaru.js","toba":"./toba/toba.js","toin":"./toin/toin.js","toyoda":"./toyoda/toyoda.js","tsu":"./tsu/tsu.js","ueno-ebisumachi":"./ueno-ebisumachi/ueno-ebisumachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
