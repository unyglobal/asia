// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mie","repository":"asia","path":"japan/oita/mie","depth":3,"parent":"japan/oita","children":["hisai-motomachi","iga","inabe","ise","kameyama","kawage","komono","kuwana","matsusaka"]});
export const childModules = Object.freeze({"hisai-motomachi":"./hisai-motomachi/hisai-motomachi.js","iga":"./iga/iga.js","inabe":"./inabe/inabe.js","ise":"./ise/ise.js","kameyama":"./kameyama/kameyama.js","kawage":"./kawage/kawage.js","komono":"./komono/komono.js","kuwana":"./kuwana/kuwana.js","matsusaka":"./matsusaka/matsusaka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
