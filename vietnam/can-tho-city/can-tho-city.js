// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"can-tho-city","repository":"asia","path":"vietnam/can-tho-city","depth":2,"parent":"vietnam","children":["ap-mot","binh-thuy","cai-rang","can-tho","long-my","nga-bay","nga-nam","o-mon","phu-loc","soc-trang","thoi-lai","thot-not","vi-thanh","vinh-chau","vinh-thanh"]});
export const childModules = Object.freeze({"ap-mot":"./ap-mot/ap-mot.js","binh-thuy":"./binh-thuy/binh-thuy.js","cai-rang":"./cai-rang/cai-rang.js","can-tho":"./can-tho/can-tho.js","long-my":"./long-my/long-my.js","nga-bay":"./nga-bay/nga-bay.js","nga-nam":"./nga-nam/nga-nam.js","o-mon":"./o-mon/o-mon.js","phu-loc":"./phu-loc/phu-loc.js","soc-trang":"./soc-trang/soc-trang.js","thoi-lai":"./thoi-lai/thoi-lai.js","thot-not":"./thot-not/thot-not.js","vi-thanh":"./vi-thanh/vi-thanh.js","vinh-chau":"./vinh-chau/vinh-chau.js","vinh-thanh":"./vinh-thanh/vinh-thanh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
