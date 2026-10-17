// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yao","repository":"asia","path":"japan/osaka/yao","depth":3,"parent":"japan/osaka","children":["aioicho","akemicho","higashitaishi","kasugacho","konancho","matsuyamacho","nagahatacho","sakaemachi","shibukawacho","shimizucho","takamicho","uematsucho","yasunakacho","yokoen"]});
export const childModules = Object.freeze({"aioicho":"./aioicho/aioicho.js","akemicho":"./akemicho/akemicho.js","higashitaishi":"./higashitaishi/higashitaishi.js","kasugacho":"./kasugacho/kasugacho.js","konancho":"./konancho/konancho.js","matsuyamacho":"./matsuyamacho/matsuyamacho.js","nagahatacho":"./nagahatacho/nagahatacho.js","sakaemachi":"./sakaemachi/sakaemachi.js","shibukawacho":"./shibukawacho/shibukawacho.js","shimizucho":"./shimizucho/shimizucho.js","takamicho":"./takamicho/takamicho.js","uematsucho":"./uematsucho/uematsucho.js","yasunakacho":"./yasunakacho/yasunakacho.js","yokoen":"./yokoen/yokoen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
