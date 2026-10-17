// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ambon","repository":"asia","path":"indonesia/maluku/ambon","depth":3,"parent":"indonesia/maluku","children":["batu-gajah","batu-meja","belakang-soya","halong-mardika","hatiwi","mangga-dua","mardika","pohon-pule","pulogansa","skip","soa-bali","soa-ema","soa-kilang","soya","tanah-tinggi","urimessing"]});
export const childModules = Object.freeze({"batu-gajah":"./batu-gajah/batu-gajah.js","batu-meja":"./batu-meja/batu-meja.js","belakang-soya":"./belakang-soya/belakang-soya.js","halong-mardika":"./halong-mardika/halong-mardika.js","hatiwi":"./hatiwi/hatiwi.js","mangga-dua":"./mangga-dua/mangga-dua.js","mardika":"./mardika/mardika.js","pohon-pule":"./pohon-pule/pohon-pule.js","pulogansa":"./pulogansa/pulogansa.js","skip":"./skip/skip.js","soa-bali":"./soa-bali/soa-bali.js","soa-ema":"./soa-ema/soa-ema.js","soa-kilang":"./soa-kilang/soa-kilang.js","soya":"./soya/soya.js","tanah-tinggi":"./tanah-tinggi/tanah-tinggi.js","urimessing":"./urimessing/urimessing.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
