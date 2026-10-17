// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"konak","repository":"asia","path":"turkiye/izmir-province/konak","depth":3,"parent":"turkiye/izmir-province","children":["cankaya","goztepe","hatay","mithat-pasa","murat-reis"]});
export const childModules = Object.freeze({"cankaya":"./cankaya/cankaya.js","goztepe":"./goztepe/goztepe.js","hatay":"./hatay/hatay.js","mithat-pasa":"./mithat-pasa/mithat-pasa.js","murat-reis":"./murat-reis/murat-reis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
