// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tarsus","repository":"asia","path":"turkiye/mersin/tarsus","depth":3,"parent":"turkiye/mersin","children":["caminur","cumhuriyet","duatepe","eski-omerli","fatih","gozlukule","ismetpasa","k-z-lmurat","resadiye","sehit-kerim","sehit-mustafa","tekke","yeni-omerli","yesilyurt"]});
export const childModules = Object.freeze({"caminur":"./caminur/caminur.js","cumhuriyet":"./cumhuriyet/cumhuriyet.js","duatepe":"./duatepe/duatepe.js","eski-omerli":"./eski-omerli/eski-omerli.js","fatih":"./fatih/fatih.js","gozlukule":"./gozlukule/gozlukule.js","ismetpasa":"./ismetpasa/ismetpasa.js","k-z-lmurat":"./k-z-lmurat/k-z-lmurat.js","resadiye":"./resadiye/resadiye.js","sehit-kerim":"./sehit-kerim/sehit-kerim.js","sehit-mustafa":"./sehit-mustafa/sehit-mustafa.js","tekke":"./tekke/tekke.js","yeni-omerli":"./yeni-omerli/yeni-omerli.js","yesilyurt":"./yesilyurt/yesilyurt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
