// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-korea","repository":"asia","path":"south-korea","depth":1,"parent":"","children":["busan","chungcheongnam-do","daegu","daejeon","gangwon-do","gwangju","gwangju-a","gyeonggi-do","gyeongsangbuk-do","gyeongsangnam-do","incheon","jeju-do","jeollabuk-do","jeollanam-do","north-chungcheong","sejong-si","seoul","ulsan"]});
export const childModules = Object.freeze({"busan":"./busan/busan.js","chungcheongnam-do":"./chungcheongnam-do/chungcheongnam-do.js","daegu":"./daegu/daegu.js","daejeon":"./daejeon/daejeon.js","gangwon-do":"./gangwon-do/gangwon-do.js","gwangju":"./gwangju/gwangju.js","gwangju-a":"./gwangju-a/gwangju-a.js","gyeonggi-do":"./gyeonggi-do/gyeonggi-do.js","gyeongsangbuk-do":"./gyeongsangbuk-do/gyeongsangbuk-do.js","gyeongsangnam-do":"./gyeongsangnam-do/gyeongsangnam-do.js","incheon":"./incheon/incheon.js","jeju-do":"./jeju-do/jeju-do.js","jeollabuk-do":"./jeollabuk-do/jeollabuk-do.js","jeollanam-do":"./jeollanam-do/jeollanam-do.js","north-chungcheong":"./north-chungcheong/north-chungcheong.js","sejong-si":"./sejong-si/sejong-si.js","seoul":"./seoul/seoul.js","ulsan":"./ulsan/ulsan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
