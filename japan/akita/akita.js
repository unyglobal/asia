// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"akita","repository":"asia","path":"japan/akita","depth":2,"parent":"japan","children":["daisen","hanawa","katagami","kita-akita","moritake","nikaho","noshiro","odate","oga","omagari","rokugo","semboku","takanosu","tenno","yokote","yurihonjo","yuzawa"]});
export const childModules = Object.freeze({"daisen":"./daisen/daisen.js","hanawa":"./hanawa/hanawa.js","katagami":"./katagami/katagami.js","kita-akita":"./kita-akita/kita-akita.js","moritake":"./moritake/moritake.js","nikaho":"./nikaho/nikaho.js","noshiro":"./noshiro/noshiro.js","odate":"./odate/odate.js","oga":"./oga/oga.js","omagari":"./omagari/omagari.js","rokugo":"./rokugo/rokugo.js","semboku":"./semboku/semboku.js","takanosu":"./takanosu/takanosu.js","tenno":"./tenno/tenno.js","yokote":"./yokote/yokote.js","yurihonjo":"./yurihonjo/yurihonjo.js","yuzawa":"./yuzawa/yuzawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
