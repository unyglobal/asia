// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jeollanam-do","repository":"asia","path":"south-korea/jeollanam-do","depth":2,"parent":"south-korea","children":["beolgyo","boseong","damyang","gwangyang","haenam","hwasun","jangheung","jangseong","kurye","kwangyang","mokpo","muan","naju","sinan","suncheon","yeongam","yeonggwang","yeosu"]});
export const childModules = Object.freeze({"beolgyo":"./beolgyo/beolgyo.js","boseong":"./boseong/boseong.js","damyang":"./damyang/damyang.js","gwangyang":"./gwangyang/gwangyang.js","haenam":"./haenam/haenam.js","hwasun":"./hwasun/hwasun.js","jangheung":"./jangheung/jangheung.js","jangseong":"./jangseong/jangseong.js","kurye":"./kurye/kurye.js","kwangyang":"./kwangyang/kwangyang.js","mokpo":"./mokpo/mokpo.js","muan":"./muan/muan.js","naju":"./naju/naju.js","sinan":"./sinan/sinan.js","suncheon":"./suncheon/suncheon.js","yeongam":"./yeongam/yeongam.js","yeonggwang":"./yeonggwang/yeonggwang.js","yeosu":"./yeosu/yeosu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
