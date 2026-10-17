// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"balikesir","repository":"asia","path":"turkiye/balikesir","depth":2,"parent":"turkiye","children":["ayval-k","bal-kesir","band-rma","bigadic","burhaniye","dursunbey","edremit","erdek","gonen","susurluk"]});
export const childModules = Object.freeze({"ayval-k":"./ayval-k/ayval-k.js","bal-kesir":"./bal-kesir/bal-kesir.js","band-rma":"./band-rma/band-rma.js","bigadic":"./bigadic/bigadic.js","burhaniye":"./burhaniye/burhaniye.js","dursunbey":"./dursunbey/dursunbey.js","edremit":"./edremit/edremit.js","erdek":"./erdek/erdek.js","gonen":"./gonen/gonen.js","susurluk":"./susurluk/susurluk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
