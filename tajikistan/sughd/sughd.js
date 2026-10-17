// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sughd","repository":"asia","path":"tajikistan/sughd","depth":2,"parent":"tajikistan","children":["buston","dalyoni-bolo","isfara","istaravshan","istiqlol","khujand","konibodom","muchun","panjakent","proletar","qayroqqum","shahriston"]});
export const childModules = Object.freeze({"buston":"./buston/buston.js","dalyoni-bolo":"./dalyoni-bolo/dalyoni-bolo.js","isfara":"./isfara/isfara.js","istaravshan":"./istaravshan/istaravshan.js","istiqlol":"./istiqlol/istiqlol.js","khujand":"./khujand/khujand.js","konibodom":"./konibodom/konibodom.js","muchun":"./muchun/muchun.js","panjakent":"./panjakent/panjakent.js","proletar":"./proletar/proletar.js","qayroqqum":"./qayroqqum/qayroqqum.js","shahriston":"./shahriston/shahriston.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
