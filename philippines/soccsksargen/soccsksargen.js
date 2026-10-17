// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soccsksargen","repository":"asia","path":"philippines/soccsksargen","depth":2,"parent":"philippines","children":["alabel","general-santos","glan","iligan-city","isulan","kabacan","kalamansig","kidapawan","koronadal","laguilayan","lake-sebu","lambayong","malapatan","malingao","malungun","midsayap","norala","polomolok","surallah","tacurong","tupi"]});
export const childModules = Object.freeze({"alabel":"./alabel/alabel.js","general-santos":"./general-santos/general-santos.js","glan":"./glan/glan.js","iligan-city":"./iligan-city/iligan-city.js","isulan":"./isulan/isulan.js","kabacan":"./kabacan/kabacan.js","kalamansig":"./kalamansig/kalamansig.js","kidapawan":"./kidapawan/kidapawan.js","koronadal":"./koronadal/koronadal.js","laguilayan":"./laguilayan/laguilayan.js","lake-sebu":"./lake-sebu/lake-sebu.js","lambayong":"./lambayong/lambayong.js","malapatan":"./malapatan/malapatan.js","malingao":"./malingao/malingao.js","malungun":"./malungun/malungun.js","midsayap":"./midsayap/midsayap.js","norala":"./norala/norala.js","polomolok":"./polomolok/polomolok.js","surallah":"./surallah/surallah.js","tacurong":"./tacurong/tacurong.js","tupi":"./tupi/tupi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
