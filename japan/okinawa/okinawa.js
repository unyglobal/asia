// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"okinawa","repository":"asia","path":"japan/okinawa","depth":2,"parent":"japan","children":["chatan","ginowan","gushikawa","hirara","ishigaki","itoman","kanegusuku","katsuren-haebaru","kishaba","miyakojima","nago","naha","nakagusuku","nanjo","nishihara","tomigusuku","tsuha","urasoe","uruma","yaese","yomitan","yonabaru"]});
export const childModules = Object.freeze({"chatan":"./chatan/chatan.js","ginowan":"./ginowan/ginowan.js","gushikawa":"./gushikawa/gushikawa.js","hirara":"./hirara/hirara.js","ishigaki":"./ishigaki/ishigaki.js","itoman":"./itoman/itoman.js","kanegusuku":"./kanegusuku/kanegusuku.js","katsuren-haebaru":"./katsuren-haebaru/katsuren-haebaru.js","kishaba":"./kishaba/kishaba.js","miyakojima":"./miyakojima/miyakojima.js","nago":"./nago/nago.js","naha":"./naha/naha.js","nakagusuku":"./nakagusuku/nakagusuku.js","nanjo":"./nanjo/nanjo.js","nishihara":"./nishihara/nishihara.js","tomigusuku":"./tomigusuku/tomigusuku.js","tsuha":"./tsuha/tsuha.js","urasoe":"./urasoe/urasoe.js","uruma":"./uruma/uruma.js","yaese":"./yaese/yaese.js","yomitan":"./yomitan/yomitan.js","yonabaru":"./yonabaru/yonabaru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
