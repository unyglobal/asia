// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hiroshima","repository":"asia","path":"japan/hiroshima","depth":2,"parent":"japan","children":["aki-takata","etajima","fuchucho","fukuyama","gion","hatsukaichi","higashihiroshima","innoshima","kaitaichi","kannabecho-yahiro","kozan","kure","mihara","ono-hara","onomichi","otake","shin-ichi","shobara","takehara","yae"]});
export const childModules = Object.freeze({"aki-takata":"./aki-takata/aki-takata.js","etajima":"./etajima/etajima.js","fuchucho":"./fuchucho/fuchucho.js","fukuyama":"./fukuyama/fukuyama.js","gion":"./gion/gion.js","hatsukaichi":"./hatsukaichi/hatsukaichi.js","higashihiroshima":"./higashihiroshima/higashihiroshima.js","innoshima":"./innoshima/innoshima.js","kaitaichi":"./kaitaichi/kaitaichi.js","kannabecho-yahiro":"./kannabecho-yahiro/kannabecho-yahiro.js","kozan":"./kozan/kozan.js","kure":"./kure/kure.js","mihara":"./mihara/mihara.js","ono-hara":"./ono-hara/ono-hara.js","onomichi":"./onomichi/onomichi.js","otake":"./otake/otake.js","shin-ichi":"./shin-ichi/shin-ichi.js","shobara":"./shobara/shobara.js","takehara":"./takehara/takehara.js","yae":"./yae/yae.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
