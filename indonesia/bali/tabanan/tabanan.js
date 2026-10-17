// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tabanan","repository":"asia","path":"indonesia/bali/tabanan","depth":3,"parent":"indonesia/bali","children":["banjar-delodrurung","banjar-dukuh","banjar-gerokgak-tengah","banjar-lebah","banjar-malkangin","banjar-sakenenbaleran","banjar-sekananbelodan","banjar-tegal-baleran","banjar-tunggalsari"]});
export const childModules = Object.freeze({"banjar-delodrurung":"./banjar-delodrurung/banjar-delodrurung.js","banjar-dukuh":"./banjar-dukuh/banjar-dukuh.js","banjar-gerokgak-tengah":"./banjar-gerokgak-tengah/banjar-gerokgak-tengah.js","banjar-lebah":"./banjar-lebah/banjar-lebah.js","banjar-malkangin":"./banjar-malkangin/banjar-malkangin.js","banjar-sakenenbaleran":"./banjar-sakenenbaleran/banjar-sakenenbaleran.js","banjar-sekananbelodan":"./banjar-sekananbelodan/banjar-sekananbelodan.js","banjar-tegal-baleran":"./banjar-tegal-baleran/banjar-tegal-baleran.js","banjar-tunggalsari":"./banjar-tunggalsari/banjar-tunggalsari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
