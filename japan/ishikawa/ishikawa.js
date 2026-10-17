// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ishikawa","repository":"asia","path":"japan/ishikawa","depth":2,"parent":"japan","children":["anamizu","hakui","hitoto","kaga","kahoku","kanazawa","komatsu","matsuto","mukai-awagasaki","nanao","nomimachi","nonoichi","oshima","tsubata","tsurugi-asahimachi","ushitsu","wajima"]});
export const childModules = Object.freeze({"anamizu":"./anamizu/anamizu.js","hakui":"./hakui/hakui.js","hitoto":"./hitoto/hitoto.js","kaga":"./kaga/kaga.js","kahoku":"./kahoku/kahoku.js","kanazawa":"./kanazawa/kanazawa.js","komatsu":"./komatsu/komatsu.js","matsuto":"./matsuto/matsuto.js","mukai-awagasaki":"./mukai-awagasaki/mukai-awagasaki.js","nanao":"./nanao/nanao.js","nomimachi":"./nomimachi/nomimachi.js","nonoichi":"./nonoichi/nonoichi.js","oshima":"./oshima/oshima.js","tsubata":"./tsubata/tsubata.js","tsurugi-asahimachi":"./tsurugi-asahimachi/tsurugi-asahimachi.js","ushitsu":"./ushitsu/ushitsu.js","wajima":"./wajima/wajima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
