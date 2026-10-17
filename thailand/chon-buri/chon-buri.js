// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"chon-buri","repository":"asia","path":"thailand/chon-buri","depth":2,"parent":"thailand","children":["ban-ang-sila","ban-bueng","ban-talat-bueng","bang-lamung","laem-chabang","pattaya","phan-thong","phanat-nikhom","sattahip","si-racha"]});
export const childModules = Object.freeze({"ban-ang-sila":"./ban-ang-sila/ban-ang-sila.js","ban-bueng":"./ban-bueng/ban-bueng.js","ban-talat-bueng":"./ban-talat-bueng/ban-talat-bueng.js","bang-lamung":"./bang-lamung/bang-lamung.js","laem-chabang":"./laem-chabang/laem-chabang.js","pattaya":"./pattaya/pattaya.js","phan-thong":"./phan-thong/phan-thong.js","phanat-nikhom":"./phanat-nikhom/phanat-nikhom.js","sattahip":"./sattahip/sattahip.js","si-racha":"./si-racha/si-racha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
