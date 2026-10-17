// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aomori","repository":"asia","path":"japan/aomori","depth":2,"parent":"japan","children":["goshogawara","hachinohe","hakuromachi","hirakawa","hirosaki","hitokawame","kuroishi","misawa","mutsu","namioka","nanaku","shimokizukuri","towada","tsugaru"]});
export const childModules = Object.freeze({"goshogawara":"./goshogawara/goshogawara.js","hachinohe":"./hachinohe/hachinohe.js","hakuromachi":"./hakuromachi/hakuromachi.js","hirakawa":"./hirakawa/hirakawa.js","hirosaki":"./hirosaki/hirosaki.js","hitokawame":"./hitokawame/hitokawame.js","kuroishi":"./kuroishi/kuroishi.js","misawa":"./misawa/misawa.js","mutsu":"./mutsu/mutsu.js","namioka":"./namioka/namioka.js","nanaku":"./nanaku/nanaku.js","shimokizukuri":"./shimokizukuri/shimokizukuri.js","towada":"./towada/towada.js","tsugaru":"./tsugaru/tsugaru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
