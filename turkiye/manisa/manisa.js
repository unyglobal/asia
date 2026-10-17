// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manisa","repository":"asia","path":"turkiye/manisa","depth":2,"parent":"turkiye","children":["alasehir","demirci","k-rkagac","kula","salihli","soma","turgutlu"]});
export const childModules = Object.freeze({"alasehir":"./alasehir/alasehir.js","demirci":"./demirci/demirci.js","k-rkagac":"./k-rkagac/k-rkagac.js","kula":"./kula/kula.js","salihli":"./salihli/salihli.js","soma":"./soma/soma.js","turgutlu":"./turgutlu/turgutlu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
