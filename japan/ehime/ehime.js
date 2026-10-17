// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ehime","repository":"asia","path":"japan/ehime","depth":2,"parent":"japan","children":["haramachi","hojo","imabari","iyo","kawanoecho","masaki-cho","matsuyama","mishohirajo","niihama","saijo","shikokuchuo","shinagawa","toon","uchiko","uwa","uwajima","yawatahama"]});
export const childModules = Object.freeze({"haramachi":"./haramachi/haramachi.js","hojo":"./hojo/hojo.js","imabari":"./imabari/imabari.js","iyo":"./iyo/iyo.js","kawanoecho":"./kawanoecho/kawanoecho.js","masaki-cho":"./masaki-cho/masaki-cho.js","matsuyama":"./matsuyama/matsuyama.js","mishohirajo":"./mishohirajo/mishohirajo.js","niihama":"./niihama/niihama.js","saijo":"./saijo/saijo.js","shikokuchuo":"./shikokuchuo/shikokuchuo.js","shinagawa":"./shinagawa/shinagawa.js","toon":"./toon/toon.js","uchiko":"./uchiko/uchiko.js","uwa":"./uwa/uwa.js","uwajima":"./uwajima/uwajima.js","yawatahama":"./yawatahama/yawatahama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
