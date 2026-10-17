// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chungcheongnam-do","repository":"asia","path":"south-korea/chungcheongnam-do","depth":2,"parent":"south-korea","children":["asan","boryeong","buyeo","cheonan","gongju","hongseong","kinzan","nonsan","seonghwan","seosan","taesal-li","tangjin","yesan","yonmu"]});
export const childModules = Object.freeze({"asan":"./asan/asan.js","boryeong":"./boryeong/boryeong.js","buyeo":"./buyeo/buyeo.js","cheonan":"./cheonan/cheonan.js","gongju":"./gongju/gongju.js","hongseong":"./hongseong/hongseong.js","kinzan":"./kinzan/kinzan.js","nonsan":"./nonsan/nonsan.js","seonghwan":"./seonghwan/seonghwan.js","seosan":"./seosan/seosan.js","taesal-li":"./taesal-li/taesal-li.js","tangjin":"./tangjin/tangjin.js","yesan":"./yesan/yesan.js","yonmu":"./yonmu/yonmu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
