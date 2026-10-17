// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hofu","repository":"asia","path":"japan/yamaguchi/hofu","depth":3,"parent":"japan/yamaguchi","children":["ebisumachi","hachioji","higashimitajiri","kuwanoyama","saba","sakaemachi","tenjin"]});
export const childModules = Object.freeze({"ebisumachi":"./ebisumachi/ebisumachi.js","hachioji":"./hachioji/hachioji.js","higashimitajiri":"./higashimitajiri/higashimitajiri.js","kuwanoyama":"./kuwanoyama/kuwanoyama.js","saba":"./saba/saba.js","sakaemachi":"./sakaemachi/sakaemachi.js","tenjin":"./tenjin/tenjin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
