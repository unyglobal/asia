// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"baki","repository":"asia","path":"azerbaijan/baki","depth":2,"parent":"azerbaijan","children":["amirdzhan","bak-xanov","baku","bilajari","biny-selo","buzovna","hovsan","lokbatan","mardakan","mastaga","qaracuxur","sabuncu","yeni-suraxan","zabrat"]});
export const childModules = Object.freeze({"amirdzhan":"./amirdzhan/amirdzhan.js","bak-xanov":"./bak-xanov/bak-xanov.js","baku":"./baku/baku.js","bilajari":"./bilajari/bilajari.js","biny-selo":"./biny-selo/biny-selo.js","buzovna":"./buzovna/buzovna.js","hovsan":"./hovsan/hovsan.js","lokbatan":"./lokbatan/lokbatan.js","mardakan":"./mardakan/mardakan.js","mastaga":"./mastaga/mastaga.js","qaracuxur":"./qaracuxur/qaracuxur.js","sabuncu":"./sabuncu/sabuncu.js","yeni-suraxan":"./yeni-suraxan/yeni-suraxan.js","zabrat":"./zabrat/zabrat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
