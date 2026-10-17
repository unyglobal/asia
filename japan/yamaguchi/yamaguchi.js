// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yamaguchi","repository":"asia","path":"japan/yamaguchi","depth":2,"parent":"japan","children":["hagi","hikari","hofu","iwakuni","kudamatsu","mine","nagato","ogori-shimogo","onoda","sanyoonoda","shimonoseki","shunan","tokuyama","ube","yanai"]});
export const childModules = Object.freeze({"hagi":"./hagi/hagi.js","hikari":"./hikari/hikari.js","hofu":"./hofu/hofu.js","iwakuni":"./iwakuni/iwakuni.js","kudamatsu":"./kudamatsu/kudamatsu.js","mine":"./mine/mine.js","nagato":"./nagato/nagato.js","ogori-shimogo":"./ogori-shimogo/ogori-shimogo.js","onoda":"./onoda/onoda.js","sanyoonoda":"./sanyoonoda/sanyoonoda.js","shimonoseki":"./shimonoseki/shimonoseki.js","shunan":"./shunan/shunan.js","tokuyama":"./tokuyama/tokuyama.js","ube":"./ube/ube.js","yanai":"./yanai/yanai.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
