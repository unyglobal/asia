// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mugla","repository":"asia","path":"turkiye/mugla","depth":2,"parent":"turkiye","children":["bodrum","dalaman","fethiye","marmaris","milas","ortaca","sarigerme","turgutreis","yatagan"]});
export const childModules = Object.freeze({"bodrum":"./bodrum/bodrum.js","dalaman":"./dalaman/dalaman.js","fethiye":"./fethiye/fethiye.js","marmaris":"./marmaris/marmaris.js","milas":"./milas/milas.js","ortaca":"./ortaca/ortaca.js","sarigerme":"./sarigerme/sarigerme.js","turgutreis":"./turgutreis/turgutreis.js","yatagan":"./yatagan/yatagan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
