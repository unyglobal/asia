// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-sumatra","repository":"asia","path":"indonesia/south-sumatra","depth":2,"parent":"indonesia","children":["baturaja","indralaya","lahat","lubuklinggau","pagar-alam","palembang","prabumulih","tanjungagung"]});
export const childModules = Object.freeze({"baturaja":"./baturaja/baturaja.js","indralaya":"./indralaya/indralaya.js","lahat":"./lahat/lahat.js","lubuklinggau":"./lubuklinggau/lubuklinggau.js","pagar-alam":"./pagar-alam/pagar-alam.js","palembang":"./palembang/palembang.js","prabumulih":"./prabumulih/prabumulih.js","tanjungagung":"./tanjungagung/tanjungagung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
