// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shimane","repository":"asia","path":"japan/shimane","depth":2,"parent":"japan","children":["gotsucho","hamada","hiratacho","izumo","masuda","matsue","odacho-oda","unnan","yasugicho"]});
export const childModules = Object.freeze({"gotsucho":"./gotsucho/gotsucho.js","hamada":"./hamada/hamada.js","hiratacho":"./hiratacho/hiratacho.js","izumo":"./izumo/izumo.js","masuda":"./masuda/masuda.js","matsue":"./matsue/matsue.js","odacho-oda":"./odacho-oda/odacho-oda.js","unnan":"./unnan/unnan.js","yasugicho":"./yasugicho/yasugicho.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
