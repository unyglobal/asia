// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okayama","repository":"asia","path":"japan/okayama","depth":2,"parent":"japan","children":["akaiwa","asakuchi","bizen","hayashino","ibara","kamogatacho-kamogata","kasaoka","kurashiki","maniwa","niimi","setouchi","soja","takahashi","tamano","tsuyama"]});
export const childModules = Object.freeze({"akaiwa":"./akaiwa/akaiwa.js","asakuchi":"./asakuchi/asakuchi.js","bizen":"./bizen/bizen.js","hayashino":"./hayashino/hayashino.js","ibara":"./ibara/ibara.js","kamogatacho-kamogata":"./kamogatacho-kamogata/kamogatacho-kamogata.js","kasaoka":"./kasaoka/kasaoka.js","kurashiki":"./kurashiki/kurashiki.js","maniwa":"./maniwa/maniwa.js","niimi":"./niimi/niimi.js","setouchi":"./setouchi/setouchi.js","soja":"./soja/soja.js","takahashi":"./takahashi/takahashi.js","tamano":"./tamano/tamano.js","tsuyama":"./tsuyama/tsuyama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
