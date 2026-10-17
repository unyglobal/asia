// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haifa","repository":"asia","path":"israel/haifa","depth":2,"parent":"israel","children":["ara-ar-ara","baqa-el-gharbiya","daliyat-al-karmel","hadera","kafr-qari","nesher","or-akiva","pardes-hanna-karkur","qiryat-ata","qiryat-bialik","qiryat-motsqin","qiryat-tiv-on","qiryat-yam","tirat-karmel","umm-el-fahm","zikhron-ya-aqov"]});
export const childModules = Object.freeze({"ara-ar-ara":"./ara-ar-ara/ara-ar-ara.js","baqa-el-gharbiya":"./baqa-el-gharbiya/baqa-el-gharbiya.js","daliyat-al-karmel":"./daliyat-al-karmel/daliyat-al-karmel.js","hadera":"./hadera/hadera.js","kafr-qari":"./kafr-qari/kafr-qari.js","nesher":"./nesher/nesher.js","or-akiva":"./or-akiva/or-akiva.js","pardes-hanna-karkur":"./pardes-hanna-karkur/pardes-hanna-karkur.js","qiryat-ata":"./qiryat-ata/qiryat-ata.js","qiryat-bialik":"./qiryat-bialik/qiryat-bialik.js","qiryat-motsqin":"./qiryat-motsqin/qiryat-motsqin.js","qiryat-tiv-on":"./qiryat-tiv-on/qiryat-tiv-on.js","qiryat-yam":"./qiryat-yam/qiryat-yam.js","tirat-karmel":"./tirat-karmel/tirat-karmel.js","umm-el-fahm":"./umm-el-fahm/umm-el-fahm.js","zikhron-ya-aqov":"./zikhron-ya-aqov/zikhron-ya-aqov.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
