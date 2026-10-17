// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"davao-region","repository":"asia","path":"philippines/davao-region","depth":2,"parent":"philippines","children":["bansalan","cabayangan","davao","digos","lupon","maco","magsaysay","magugpo-poblacion","malita","manay","mati","monkayo","nabunturan","new-corella","panabo","san-mariano"]});
export const childModules = Object.freeze({"bansalan":"./bansalan/bansalan.js","cabayangan":"./cabayangan/cabayangan.js","davao":"./davao/davao.js","digos":"./digos/digos.js","lupon":"./lupon/lupon.js","maco":"./maco/maco.js","magsaysay":"./magsaysay/magsaysay.js","magugpo-poblacion":"./magugpo-poblacion/magugpo-poblacion.js","malita":"./malita/malita.js","manay":"./manay/manay.js","mati":"./mati/mati.js","monkayo":"./monkayo/monkayo.js","nabunturan":"./nabunturan/nabunturan.js","new-corella":"./new-corella/new-corella.js","panabo":"./panabo/panabo.js","san-mariano":"./san-mariano/san-mariano.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
