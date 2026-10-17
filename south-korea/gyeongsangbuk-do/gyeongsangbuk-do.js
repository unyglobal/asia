// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gyeongsangbuk-do","repository":"asia","path":"south-korea/gyeongsangbuk-do","depth":2,"parent":"south-korea","children":["andong","cheongsong-gun","eisen","gimcheon","gumi","gyeongju","gyeongsan-si","hayang","heunghae","jenzan","kunwi","mungyeong","pohang","sangju","waegwan","yecheon","yeongju","yeonil"]});
export const childModules = Object.freeze({"andong":"./andong/andong.js","cheongsong-gun":"./cheongsong-gun/cheongsong-gun.js","eisen":"./eisen/eisen.js","gimcheon":"./gimcheon/gimcheon.js","gumi":"./gumi/gumi.js","gyeongju":"./gyeongju/gyeongju.js","gyeongsan-si":"./gyeongsan-si/gyeongsan-si.js","hayang":"./hayang/hayang.js","heunghae":"./heunghae/heunghae.js","jenzan":"./jenzan/jenzan.js","kunwi":"./kunwi/kunwi.js","mungyeong":"./mungyeong/mungyeong.js","pohang":"./pohang/pohang.js","sangju":"./sangju/sangju.js","waegwan":"./waegwan/waegwan.js","yecheon":"./yecheon/yecheon.js","yeongju":"./yeongju/yeongju.js","yeonil":"./yeonil/yeonil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
