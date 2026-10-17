// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"onojo","repository":"asia","path":"japan/fukuoka/onojo","depth":3,"parent":"japan/fukuoka","children":["akebonomachi","mikasagawa","mizuhomachi","nishikimachi","sakaemachi","tsutsui","zatsushonokumamachi"]});
export const childModules = Object.freeze({"akebonomachi":"./akebonomachi/akebonomachi.js","mikasagawa":"./mikasagawa/mikasagawa.js","mizuhomachi":"./mizuhomachi/mizuhomachi.js","nishikimachi":"./nishikimachi/nishikimachi.js","sakaemachi":"./sakaemachi/sakaemachi.js","tsutsui":"./tsutsui/tsutsui.js","zatsushonokumamachi":"./zatsushonokumamachi/zatsushonokumamachi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
