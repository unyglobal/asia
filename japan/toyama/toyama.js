// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toyama","repository":"asia","path":"japan/toyama","depth":2,"parent":"japan","children":["fukumitsu","gohyakkoku","himi","himimachi","imizu","kamiichi","kurobe-shi","namerikawa","nanto","nanto-shi","nishishinminato","nyuzen","oyabe","takaoka","tonami","uozu","yatsuomachi-higashikumisaka"]});
export const childModules = Object.freeze({"fukumitsu":"./fukumitsu/fukumitsu.js","gohyakkoku":"./gohyakkoku/gohyakkoku.js","himi":"./himi/himi.js","himimachi":"./himimachi/himimachi.js","imizu":"./imizu/imizu.js","kamiichi":"./kamiichi/kamiichi.js","kurobe-shi":"./kurobe-shi/kurobe-shi.js","namerikawa":"./namerikawa/namerikawa.js","nanto":"./nanto/nanto.js","nanto-shi":"./nanto-shi/nanto-shi.js","nishishinminato":"./nishishinminato/nishishinminato.js","nyuzen":"./nyuzen/nyuzen.js","oyabe":"./oyabe/oyabe.js","takaoka":"./takaoka/takaoka.js","tonami":"./tonami/tonami.js","uozu":"./uozu/uozu.js","yatsuomachi-higashikumisaka":"./yatsuomachi-higashikumisaka/yatsuomachi-higashikumisaka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
