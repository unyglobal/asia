// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ratanakiri","repository":"asia","path":"cambodia/ratanakiri","depth":2,"parent":"cambodia","children":["banlung","lumphat"]});
export const childModules = Object.freeze({"banlung":"./banlung/banlung.js","lumphat":"./lumphat/lumphat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
