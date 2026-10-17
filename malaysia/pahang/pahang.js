// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pahang","repository":"asia","path":"malaysia/pahang","depth":2,"parent":"malaysia","children":["bandar-tun-razak","bentong-town","bentung","felda-chini","jerantut","kampung-perak","kuala-lipis","kuantan","maran","mentakab","pekan","raub","temerluh"]});
export const childModules = Object.freeze({"bandar-tun-razak":"./bandar-tun-razak/bandar-tun-razak.js","bentong-town":"./bentong-town/bentong-town.js","bentung":"./bentung/bentung.js","felda-chini":"./felda-chini/felda-chini.js","jerantut":"./jerantut/jerantut.js","kampung-perak":"./kampung-perak/kampung-perak.js","kuala-lipis":"./kuala-lipis/kuala-lipis.js","kuantan":"./kuantan/kuantan.js","maran":"./maran/maran.js","mentakab":"./mentakab/mentakab.js","pekan":"./pekan/pekan.js","raub":"./raub/raub.js","temerluh":"./temerluh/temerluh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
