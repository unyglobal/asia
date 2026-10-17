// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sistan-and-baluchestan","repository":"asia","path":"iran/sistan-and-baluchestan","depth":2,"parent":"iran","children":["chabahar","iranshahr","jalq","khash","konarak","nikshahr","pishin","qasr-e-qand","saravan","zabol","zahedan"]});
export const childModules = Object.freeze({"chabahar":"./chabahar/chabahar.js","iranshahr":"./iranshahr/iranshahr.js","jalq":"./jalq/jalq.js","khash":"./khash/khash.js","konarak":"./konarak/konarak.js","nikshahr":"./nikshahr/nikshahr.js","pishin":"./pishin/pishin.js","qasr-e-qand":"./qasr-e-qand/qasr-e-qand.js","saravan":"./saravan/saravan.js","zabol":"./zabol/zabol.js","zahedan":"./zahedan/zahedan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
