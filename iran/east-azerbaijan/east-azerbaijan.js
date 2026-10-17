// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-azerbaijan","repository":"asia","path":"iran/east-azerbaijan","depth":2,"parent":"iran","children":["ahar","ajab-shir","azarshahr","bonab","bostanabad","hadishahr","hashtrud","ilkhchi","khosrowshahr","malekan","marand","mianeh","osku","sahand","sarab","sardrud","shabestar","tabriz"]});
export const childModules = Object.freeze({"ahar":"./ahar/ahar.js","ajab-shir":"./ajab-shir/ajab-shir.js","azarshahr":"./azarshahr/azarshahr.js","bonab":"./bonab/bonab.js","bostanabad":"./bostanabad/bostanabad.js","hadishahr":"./hadishahr/hadishahr.js","hashtrud":"./hashtrud/hashtrud.js","ilkhchi":"./ilkhchi/ilkhchi.js","khosrowshahr":"./khosrowshahr/khosrowshahr.js","malekan":"./malekan/malekan.js","marand":"./marand/marand.js","mianeh":"./mianeh/mianeh.js","osku":"./osku/osku.js","sahand":"./sahand/sahand.js","sarab":"./sarab/sarab.js","sardrud":"./sardrud/sardrud.js","shabestar":"./shabestar/shabestar.js","tabriz":"./tabriz/tabriz.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
