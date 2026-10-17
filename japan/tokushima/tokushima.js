// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tokushima","repository":"asia","path":"japan/tokushima","depth":2,"parent":"japan","children":["anan","awa","ikedacho","ishii","kamojimacho-jogejima","komatsushimacho","mima","narutocho-mitsuishi","takabo","wakimachi","yakami","yoshinogawa"]});
export const childModules = Object.freeze({"anan":"./anan/anan.js","awa":"./awa/awa.js","ikedacho":"./ikedacho/ikedacho.js","ishii":"./ishii/ishii.js","kamojimacho-jogejima":"./kamojimacho-jogejima/kamojimacho-jogejima.js","komatsushimacho":"./komatsushimacho/komatsushimacho.js","mima":"./mima/mima.js","narutocho-mitsuishi":"./narutocho-mitsuishi/narutocho-mitsuishi.js","takabo":"./takabo/takabo.js","wakimachi":"./wakimachi/wakimachi.js","yakami":"./yakami/yakami.js","yoshinogawa":"./yoshinogawa/yoshinogawa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
