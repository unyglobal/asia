// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fujiidera","repository":"asia","path":"japan/osaka/fujiidera","depth":3,"parent":"japan/osaka","children":["fujigaoka","kasugaoka","komuro","nishikomuro","nonaka","oka","sawada"]});
export const childModules = Object.freeze({"fujigaoka":"./fujigaoka/fujigaoka.js","kasugaoka":"./kasugaoka/kasugaoka.js","komuro":"./komuro/komuro.js","nishikomuro":"./nishikomuro/nishikomuro.js","nonaka":"./nonaka/nonaka.js","oka":"./oka/oka.js","sawada":"./sawada/sawada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
