// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"samut-prakan","repository":"asia","path":"thailand/samut-prakan","depth":2,"parent":"thailand","children":["ban-khlong-bang-sao-thong","bang-bo-district","phra-pradaeng"]});
export const childModules = Object.freeze({"ban-khlong-bang-sao-thong":"./ban-khlong-bang-sao-thong/ban-khlong-bang-sao-thong.js","bang-bo-district":"./bang-bo-district/bang-bo-district.js","phra-pradaeng":"./phra-pradaeng/phra-pradaeng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
