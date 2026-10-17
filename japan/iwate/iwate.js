// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"iwate","repository":"asia","path":"japan/iwate","depth":2,"parent":"japan","children":["hachimantai","hanamaki","hizume","ichinoseki","kamaishi","kanegasaki","kitakami","kuji","mizusawa","morioka","ninohe","ofunato","oshu","rikuzen-takata","shizukuishi","takizawa","tono","yahaba","yamada"]});
export const childModules = Object.freeze({"hachimantai":"./hachimantai/hachimantai.js","hanamaki":"./hanamaki/hanamaki.js","hizume":"./hizume/hizume.js","ichinoseki":"./ichinoseki/ichinoseki.js","kamaishi":"./kamaishi/kamaishi.js","kanegasaki":"./kanegasaki/kanegasaki.js","kitakami":"./kitakami/kitakami.js","kuji":"./kuji/kuji.js","mizusawa":"./mizusawa/mizusawa.js","morioka":"./morioka/morioka.js","ninohe":"./ninohe/ninohe.js","ofunato":"./ofunato/ofunato.js","oshu":"./oshu/oshu.js","rikuzen-takata":"./rikuzen-takata/rikuzen-takata.js","shizukuishi":"./shizukuishi/shizukuishi.js","takizawa":"./takizawa/takizawa.js","tono":"./tono/tono.js","yahaba":"./yahaba/yahaba.js","yamada":"./yamada/yamada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
