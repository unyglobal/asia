// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"southern-district","repository":"asia","path":"israel/southern-district","depth":2,"parent":"israel","children":["ar-ara-banegev","arad","ashdod","ashkelon","beersheba","dimona","eilat","hura","kiryat-gat","kuseifa","netivot","ofaqim","qiryat-mal-akhi","rahat","sderot","tel-sheva"]});
export const childModules = Object.freeze({"ar-ara-banegev":"./ar-ara-banegev/ar-ara-banegev.js","arad":"./arad/arad.js","ashdod":"./ashdod/ashdod.js","ashkelon":"./ashkelon/ashkelon.js","beersheba":"./beersheba/beersheba.js","dimona":"./dimona/dimona.js","eilat":"./eilat/eilat.js","hura":"./hura/hura.js","kiryat-gat":"./kiryat-gat/kiryat-gat.js","kuseifa":"./kuseifa/kuseifa.js","netivot":"./netivot/netivot.js","ofaqim":"./ofaqim/ofaqim.js","qiryat-mal-akhi":"./qiryat-mal-akhi/qiryat-mal-akhi.js","rahat":"./rahat/rahat.js","sderot":"./sderot/sderot.js","tel-sheva":"./tel-sheva/tel-sheva.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
