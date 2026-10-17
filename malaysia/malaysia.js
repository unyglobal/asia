// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"malaysia","repository":"asia","path":"malaysia","depth":1,"parent":"","children":["johor","kedah","kelantan","kuala-lumpur","labuan","melaka","negeri-sembilan","pahang","penang","perak","perlis","putrajaya","sabah","sarawak","selangor","seremban-a","ss","terengganu"]});
export const childModules = Object.freeze({"johor":"./johor/johor.js","kedah":"./kedah/kedah.js","kelantan":"./kelantan/kelantan.js","kuala-lumpur":"./kuala-lumpur/kuala-lumpur.js","labuan":"./labuan/labuan.js","melaka":"./melaka/melaka.js","negeri-sembilan":"./negeri-sembilan/negeri-sembilan.js","pahang":"./pahang/pahang.js","penang":"./penang/penang.js","perak":"./perak/perak.js","perlis":"./perlis/perlis.js","putrajaya":"./putrajaya/putrajaya.js","sabah":"./sabah/sabah.js","sarawak":"./sarawak/sarawak.js","selangor":"./selangor/selangor.js","seremban-a":"./seremban-a/seremban-a.js","ss":"./ss/ss.js","terengganu":"./terengganu/terengganu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
