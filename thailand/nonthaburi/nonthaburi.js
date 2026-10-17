// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nonthaburi","repository":"asia","path":"thailand/nonthaburi","depth":2,"parent":"thailand","children":["bang-bua-thong","bang-kruai","bang-o","mueang-nonthaburi","pak-kret"]});
export const childModules = Object.freeze({"bang-bua-thong":"./bang-bua-thong/bang-bua-thong.js","bang-kruai":"./bang-kruai/bang-kruai.js","bang-o":"./bang-o/bang-o.js","mueang-nonthaburi":"./mueang-nonthaburi/mueang-nonthaburi.js","pak-kret":"./pak-kret/pak-kret.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
