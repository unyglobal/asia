// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-hwanghae","repository":"asia","path":"north-korea/south-hwanghae","depth":2,"parent":"north-korea","children":["ayang-ni","ch-ongdan-up","chaeryong-up","changyon","haeju","kangnyong","kwail-up","ongjin","paech-on-up","pongch-on-up","samch-on","sinch-on-up","sinwon-up","songhwa","t-aet-an-up","ullyul","unch-on-up","yonan-up"]});
export const childModules = Object.freeze({"ayang-ni":"./ayang-ni/ayang-ni.js","ch-ongdan-up":"./ch-ongdan-up/ch-ongdan-up.js","chaeryong-up":"./chaeryong-up/chaeryong-up.js","changyon":"./changyon/changyon.js","haeju":"./haeju/haeju.js","kangnyong":"./kangnyong/kangnyong.js","kwail-up":"./kwail-up/kwail-up.js","ongjin":"./ongjin/ongjin.js","paech-on-up":"./paech-on-up/paech-on-up.js","pongch-on-up":"./pongch-on-up/pongch-on-up.js","samch-on":"./samch-on/samch-on.js","sinch-on-up":"./sinch-on-up/sinch-on-up.js","sinwon-up":"./sinwon-up/sinwon-up.js","songhwa":"./songhwa/songhwa.js","t-aet-an-up":"./t-aet-an-up/t-aet-an-up.js","ullyul":"./ullyul/ullyul.js","unch-on-up":"./unch-on-up/unch-on-up.js","yonan-up":"./yonan-up/yonan-up.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
