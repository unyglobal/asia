// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ca-mau","repository":"asia","path":"vietnam/ca-mau","depth":2,"parent":"vietnam","children":["an-trach","ap-ho-phong","bac-lieu","cai-oi-vam","ganh-hao","gia-rai","hung-my","nam-can","phong-thanh","tam-giang","thoi-binh","tran-van-thoi"]});
export const childModules = Object.freeze({"an-trach":"./an-trach/an-trach.js","ap-ho-phong":"./ap-ho-phong/ap-ho-phong.js","bac-lieu":"./bac-lieu/bac-lieu.js","cai-oi-vam":"./cai-oi-vam/cai-oi-vam.js","ganh-hao":"./ganh-hao/ganh-hao.js","gia-rai":"./gia-rai/gia-rai.js","hung-my":"./hung-my/hung-my.js","nam-can":"./nam-can/nam-can.js","phong-thanh":"./phong-thanh/phong-thanh.js","tam-giang":"./tam-giang/tam-giang.js","thoi-binh":"./thoi-binh/thoi-binh.js","tran-van-thoi":"./tran-van-thoi/tran-van-thoi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
