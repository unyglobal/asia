// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kyoto","repository":"asia","path":"japan/kyoto","depth":2,"parent":"japan","children":["arashiyama","ayabe","fukuchiyama","joyo","kameoka","kamigyo-ku","kizugawa","kotari","kyotanabe","kyotango","maizuru","miyazu","muko","nantan","oyamazaki","sugai","uji","yawata","yotsutsuji"]});
export const childModules = Object.freeze({"arashiyama":"./arashiyama/arashiyama.js","ayabe":"./ayabe/ayabe.js","fukuchiyama":"./fukuchiyama/fukuchiyama.js","joyo":"./joyo/joyo.js","kameoka":"./kameoka/kameoka.js","kamigyo-ku":"./kamigyo-ku/kamigyo-ku.js","kizugawa":"./kizugawa/kizugawa.js","kotari":"./kotari/kotari.js","kyotanabe":"./kyotanabe/kyotanabe.js","kyotango":"./kyotango/kyotango.js","maizuru":"./maizuru/maizuru.js","miyazu":"./miyazu/miyazu.js","muko":"./muko/muko.js","nantan":"./nantan/nantan.js","oyamazaki":"./oyamazaki/oyamazaki.js","sugai":"./sugai/sugai.js","uji":"./uji/uji.js","yawata":"./yawata/yawata.js","yotsutsuji":"./yotsutsuji/yotsutsuji.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
