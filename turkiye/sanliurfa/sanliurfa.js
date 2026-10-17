// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sanliurfa","repository":"asia","path":"turkiye/sanliurfa","depth":2,"parent":"turkiye","children":["akcakale","birecik","bozova","ceylanp-nar","hilvan","sanl-urfa","siverek","suruc","viransehir"]});
export const childModules = Object.freeze({"akcakale":"./akcakale/akcakale.js","birecik":"./birecik/birecik.js","bozova":"./bozova/bozova.js","ceylanp-nar":"./ceylanp-nar/ceylanp-nar.js","hilvan":"./hilvan/hilvan.js","sanl-urfa":"./sanl-urfa/sanl-urfa.js","siverek":"./siverek/siverek.js","suruc":"./suruc/suruc.js","viransehir":"./viransehir/viransehir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
