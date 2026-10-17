// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zamboanga-peninsula","repository":"asia","path":"philippines/zamboanga-peninsula","depth":2,"parent":"philippines","children":["dapitan","dipolog","ipil","mahayag","molave","muricay","pagadian","recodo","siocon","zamboanga"]});
export const childModules = Object.freeze({"dapitan":"./dapitan/dapitan.js","dipolog":"./dipolog/dipolog.js","ipil":"./ipil/ipil.js","mahayag":"./mahayag/mahayag.js","molave":"./molave/molave.js","muricay":"./muricay/muricay.js","pagadian":"./pagadian/pagadian.js","recodo":"./recodo/recodo.js","siocon":"./siocon/siocon.js","zamboanga":"./zamboanga/zamboanga.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
