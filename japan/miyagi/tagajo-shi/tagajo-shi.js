// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tagajo-shi","repository":"asia","path":"japan/miyagi/tagajo-shi","depth":3,"parent":"japan/miyagi","children":["chuo","higashitanaka","jonan","tomegaya","ukishima"]});
export const childModules = Object.freeze({"chuo":"./chuo/chuo.js","higashitanaka":"./higashitanaka/higashitanaka.js","jonan":"./jonan/jonan.js","tomegaya":"./tomegaya/tomegaya.js","ukishima":"./ukishima/ukishima.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
