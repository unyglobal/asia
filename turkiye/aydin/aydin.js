// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aydin","repository":"asia","path":"turkiye/aydin","depth":2,"parent":"turkiye","children":["ayd-n","cine","didim","incirliova","kusadas","nazilli","soke"]});
export const childModules = Object.freeze({"ayd-n":"./ayd-n/ayd-n.js","cine":"./cine/cine.js","didim":"./didim/didim.js","incirliova":"./incirliova/incirliova.js","kusadas":"./kusadas/kusadas.js","nazilli":"./nazilli/nazilli.js","soke":"./soke/soke.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
