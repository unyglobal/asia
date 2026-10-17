// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mazandaran","repository":"asia","path":"iran/mazandaran","depth":2,"parent":"iran","children":["amir-kola","amol","babol","babolsar","behshahr","chalus","fereydun-kenar","galugah","juybar","katalem-va-sadat-shahr","mahmudabad","neka","nowshahr","nur","qa-em-shahr","ramsar","sari","tonekabon","zir-ab"]});
export const childModules = Object.freeze({"amir-kola":"./amir-kola/amir-kola.js","amol":"./amol/amol.js","babol":"./babol/babol.js","babolsar":"./babolsar/babolsar.js","behshahr":"./behshahr/behshahr.js","chalus":"./chalus/chalus.js","fereydun-kenar":"./fereydun-kenar/fereydun-kenar.js","galugah":"./galugah/galugah.js","juybar":"./juybar/juybar.js","katalem-va-sadat-shahr":"./katalem-va-sadat-shahr/katalem-va-sadat-shahr.js","mahmudabad":"./mahmudabad/mahmudabad.js","neka":"./neka/neka.js","nowshahr":"./nowshahr/nowshahr.js","nur":"./nur/nur.js","qa-em-shahr":"./qa-em-shahr/qa-em-shahr.js","ramsar":"./ramsar/ramsar.js","sari":"./sari/sari.js","tonekabon":"./tonekabon/tonekabon.js","zir-ab":"./zir-ab/zir-ab.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
