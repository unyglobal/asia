// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bukhara","repository":"asia","path":"uzbekistan/bukhara","depth":2,"parent":"uzbekistan","children":["g-ijduvon-shahri","karakul","kogon-shahri","shofirkon-shahri","uchkuduk","vobkent-shahri"]});
export const childModules = Object.freeze({"g-ijduvon-shahri":"./g-ijduvon-shahri/g-ijduvon-shahri.js","karakul":"./karakul/karakul.js","kogon-shahri":"./kogon-shahri/kogon-shahri.js","shofirkon-shahri":"./shofirkon-shahri/shofirkon-shahri.js","uchkuduk":"./uchkuduk/uchkuduk.js","vobkent-shahri":"./vobkent-shahri/vobkent-shahri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
