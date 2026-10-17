// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"phuket","repository":"asia","path":"thailand/phuket","depth":2,"parent":"thailand","children":["ban-chalong","ban-kamala","ban-ko-sire","ban-ratsada","ban-talat-nua","ban-talat-yai","kathu","wichit"]});
export const childModules = Object.freeze({"ban-chalong":"./ban-chalong/ban-chalong.js","ban-kamala":"./ban-kamala/ban-kamala.js","ban-ko-sire":"./ban-ko-sire/ban-ko-sire.js","ban-ratsada":"./ban-ratsada/ban-ratsada.js","ban-talat-nua":"./ban-talat-nua/ban-talat-nua.js","ban-talat-yai":"./ban-talat-yai/ban-talat-yai.js","kathu":"./kathu/kathu.js","wichit":"./wichit/wichit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
