// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"afyonkarahisar-province","repository":"asia","path":"turkiye/afyonkarahisar-province","depth":2,"parent":"turkiye","children":["afyonkarahisar","bolvadin","cay","dinar","emirdag","sand-kl"]});
export const childModules = Object.freeze({"afyonkarahisar":"./afyonkarahisar/afyonkarahisar.js","bolvadin":"./bolvadin/bolvadin.js","cay":"./cay/cay.js","dinar":"./dinar/dinar.js","emirdag":"./emirdag/emirdag.js","sand-kl":"./sand-kl/sand-kl.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
