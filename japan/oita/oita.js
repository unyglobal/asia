// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oita","repository":"asia","path":"japan/oita","depth":2,"parent":"japan","children":["beppu","bungo-takada-shi","hiji","hita","kitsuki","kunisaki","mie","nakatsu","saiki","takedamachi","tsukawaki","tsukumiura","tsurusaki","usuki","yufu"]});
export const childModules = Object.freeze({"beppu":"./beppu/beppu.js","bungo-takada-shi":"./bungo-takada-shi/bungo-takada-shi.js","hiji":"./hiji/hiji.js","hita":"./hita/hita.js","kitsuki":"./kitsuki/kitsuki.js","kunisaki":"./kunisaki/kunisaki.js","mie":"./mie/mie.js","nakatsu":"./nakatsu/nakatsu.js","saiki":"./saiki/saiki.js","takedamachi":"./takedamachi/takedamachi.js","tsukawaki":"./tsukawaki/tsukawaki.js","tsukumiura":"./tsukumiura/tsukumiura.js","tsurusaki":"./tsurusaki/tsurusaki.js","usuki":"./usuki/usuki.js","yufu":"./yufu/yufu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
