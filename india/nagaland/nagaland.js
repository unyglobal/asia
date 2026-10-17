// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nagaland","repository":"asia","path":"india/nagaland","depth":2,"parent":"india","children":["chumukedima","dimapur","kiphire","kohima","kuda","mokokchung","mon","tuensang","wokha","zunheboto"]});
export const childModules = Object.freeze({"chumukedima":"./chumukedima/chumukedima.js","dimapur":"./dimapur/dimapur.js","kiphire":"./kiphire/kiphire.js","kohima":"./kohima/kohima.js","kuda":"./kuda/kuda.js","mokokchung":"./mokokchung/mokokchung.js","mon":"./mon/mon.js","tuensang":"./tuensang/tuensang.js","wokha":"./wokha/wokha.js","zunheboto":"./zunheboto/zunheboto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
