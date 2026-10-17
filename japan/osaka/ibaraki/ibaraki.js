// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ibaraki","repository":"asia","path":"japan/osaka/ibaraki","depth":3,"parent":"japan/osaka","children":["ami","bando","chikusei","daigo","edosaki","ekimae","fujishiro","fukawa","funaishikawa","hitachi","hitachi-naka","hitachi-ota","hitachiomiya","hokota","kamichujo","kasuga"]});
export const childModules = Object.freeze({"ami":"./ami/ami.js","bando":"./bando/bando.js","chikusei":"./chikusei/chikusei.js","daigo":"./daigo/daigo.js","edosaki":"./edosaki/edosaki.js","ekimae":"./ekimae/ekimae.js","fujishiro":"./fujishiro/fujishiro.js","fukawa":"./fukawa/fukawa.js","funaishikawa":"./funaishikawa/funaishikawa.js","hitachi":"./hitachi/hitachi.js","hitachi-naka":"./hitachi-naka/hitachi-naka.js","hitachi-ota":"./hitachi-ota/hitachi-ota.js","hitachiomiya":"./hitachiomiya/hitachiomiya.js","hokota":"./hokota/hokota.js","kamichujo":"./kamichujo/kamichujo.js","kasuga":"./kasuga/kasuga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
