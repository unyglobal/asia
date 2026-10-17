// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cagayan-valley","repository":"asia","path":"philippines/cagayan-valley","depth":2,"parent":"philippines","children":["aglipay","alicia","aparri","baggabag-b","bambang","bayombong","cabagan","diadi","dupax-del-norte","dupax-del-sur","ilagan","ramon","sanchez-mira","santiago","solana","solano","tuguegarao"]});
export const childModules = Object.freeze({"aglipay":"./aglipay/aglipay.js","alicia":"./alicia/alicia.js","aparri":"./aparri/aparri.js","baggabag-b":"./baggabag-b/baggabag-b.js","bambang":"./bambang/bambang.js","bayombong":"./bayombong/bayombong.js","cabagan":"./cabagan/cabagan.js","diadi":"./diadi/diadi.js","dupax-del-norte":"./dupax-del-norte/dupax-del-norte.js","dupax-del-sur":"./dupax-del-sur/dupax-del-sur.js","ilagan":"./ilagan/ilagan.js","ramon":"./ramon/ramon.js","sanchez-mira":"./sanchez-mira/sanchez-mira.js","santiago":"./santiago/santiago.js","solana":"./solana/solana.js","solano":"./solano/solano.js","tuguegarao":"./tuguegarao/tuguegarao.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
