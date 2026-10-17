// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"north-hamgyong","repository":"asia","path":"north-korea/north-hamgyong","depth":2,"parent":"north-korea","children":["aoji-ri","chongjin","hoeryong","hwadae","hwasong","kilju","kyongsong","musan-up","myongch-on","myonggan-dong","namyang","namyang-nodongjagu","onsong","orang","puryong-up","ranam","undok","yonsa-up"]});
export const childModules = Object.freeze({"aoji-ri":"./aoji-ri/aoji-ri.js","chongjin":"./chongjin/chongjin.js","hoeryong":"./hoeryong/hoeryong.js","hwadae":"./hwadae/hwadae.js","hwasong":"./hwasong/hwasong.js","kilju":"./kilju/kilju.js","kyongsong":"./kyongsong/kyongsong.js","musan-up":"./musan-up/musan-up.js","myongch-on":"./myongch-on/myongch-on.js","myonggan-dong":"./myonggan-dong/myonggan-dong.js","namyang":"./namyang/namyang.js","namyang-nodongjagu":"./namyang-nodongjagu/namyang-nodongjagu.js","onsong":"./onsong/onsong.js","orang":"./orang/orang.js","puryong-up":"./puryong-up/puryong-up.js","ranam":"./ranam/ranam.js","undok":"./undok/undok.js","yonsa-up":"./yonsa-up/yonsa-up.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
