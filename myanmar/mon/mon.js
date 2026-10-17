// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mon","repository":"asia","path":"myanmar/mon","depth":2,"parent":"myanmar","children":["hmaw-bi","kyaikkami","kyaikto","kyauktaga","martaban","mawlamyine","mudon","paung","thanbyuzayat","thaton","ye"]});
export const childModules = Object.freeze({"hmaw-bi":"./hmaw-bi/hmaw-bi.js","kyaikkami":"./kyaikkami/kyaikkami.js","kyaikto":"./kyaikto/kyaikto.js","kyauktaga":"./kyauktaga/kyauktaga.js","martaban":"./martaban/martaban.js","mawlamyine":"./mawlamyine/mawlamyine.js","mudon":"./mudon/mudon.js","paung":"./paung/paung.js","thanbyuzayat":"./thanbyuzayat/thanbyuzayat.js","thaton":"./thaton/thaton.js","ye":"./ye/ye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
