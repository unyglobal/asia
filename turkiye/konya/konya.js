// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"konya","repository":"asia","path":"turkiye/konya","depth":2,"parent":"turkiye","children":["aksehir","beysehir","cumra","hadim","ilg-n","kad-nhan","karap-nar","kulu","seydisehir"]});
export const childModules = Object.freeze({"aksehir":"./aksehir/aksehir.js","beysehir":"./beysehir/beysehir.js","cumra":"./cumra/cumra.js","hadim":"./hadim/hadim.js","ilg-n":"./ilg-n/ilg-n.js","kad-nhan":"./kad-nhan/kad-nhan.js","karap-nar":"./karap-nar/karap-nar.js","kulu":"./kulu/kulu.js","seydisehir":"./seydisehir/seydisehir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
