// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kermanshah-province","repository":"asia","path":"iran/kermanshah-province","depth":2,"parent":"iran","children":["eslamabad-e-gharb","harsin","javanrud","kangavar","kermanshah","paveh","qasr-e-shirin","ravansar","sahneh","sarpol-e-zahab","sonqor"]});
export const childModules = Object.freeze({"eslamabad-e-gharb":"./eslamabad-e-gharb/eslamabad-e-gharb.js","harsin":"./harsin/harsin.js","javanrud":"./javanrud/javanrud.js","kangavar":"./kangavar/kangavar.js","kermanshah":"./kermanshah/kermanshah.js","paveh":"./paveh/paveh.js","qasr-e-shirin":"./qasr-e-shirin/qasr-e-shirin.js","ravansar":"./ravansar/ravansar.js","sahneh":"./sahneh/sahneh.js","sarpol-e-zahab":"./sarpol-e-zahab/sarpol-e-zahab.js","sonqor":"./sonqor/sonqor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
