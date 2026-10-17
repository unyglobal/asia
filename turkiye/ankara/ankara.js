// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ankara","repository":"asia","path":"turkiye/ankara","depth":2,"parent":"turkiye","children":["akyurt","batikent","beypazar","cankaya","cubuk","elmadag","etlik","incirli","k-z-lcahamam","kazan","nall-han","polatl","sereflikochisar"]});
export const childModules = Object.freeze({"akyurt":"./akyurt/akyurt.js","batikent":"./batikent/batikent.js","beypazar":"./beypazar/beypazar.js","cankaya":"./cankaya/cankaya.js","cubuk":"./cubuk/cubuk.js","elmadag":"./elmadag/elmadag.js","etlik":"./etlik/etlik.js","incirli":"./incirli/incirli.js","k-z-lcahamam":"./k-z-lcahamam/k-z-lcahamam.js","kazan":"./kazan/kazan.js","nall-han":"./nall-han/nall-han.js","polatl":"./polatl/polatl.js","sereflikochisar":"./sereflikochisar/sereflikochisar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
