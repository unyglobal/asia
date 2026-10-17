// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shiogama","repository":"asia","path":"japan/miyagi/shiogama","depth":3,"parent":"japan/miyagi","children":["funairi","kitahama","minatomachi","teizandori"]});
export const childModules = Object.freeze({"funairi":"./funairi/funairi.js","kitahama":"./kitahama/kitahama.js","minatomachi":"./minatomachi/minatomachi.js","teizandori":"./teizandori/teizandori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
