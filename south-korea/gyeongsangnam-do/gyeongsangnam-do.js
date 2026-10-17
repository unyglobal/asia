// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyeongsangnam-do","repository":"asia","path":"south-korea/gyeongsangnam-do","depth":2,"parent":"south-korea","children":["changnyeong","changwon","chinju","geoje","goseong","hadong","kimhae","kyosai","miryang","naeso","sinhyeon","tongyeong","ungsang","yangsan"]});
export const childModules = Object.freeze({"changnyeong":"./changnyeong/changnyeong.js","changwon":"./changwon/changwon.js","chinju":"./chinju/chinju.js","geoje":"./geoje/geoje.js","goseong":"./goseong/goseong.js","hadong":"./hadong/hadong.js","kimhae":"./kimhae/kimhae.js","kyosai":"./kyosai/kyosai.js","miryang":"./miryang/miryang.js","naeso":"./naeso/naeso.js","sinhyeon":"./sinhyeon/sinhyeon.js","tongyeong":"./tongyeong/tongyeong.js","ungsang":"./ungsang/ungsang.js","yangsan":"./yangsan/yangsan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
