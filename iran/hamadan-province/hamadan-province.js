// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamadan-province","repository":"asia","path":"iran/hamadan-province","depth":2,"parent":"iran","children":["asadabad","bahar","hamadan","kabudarahang","malayer","nahavand","tuyserkan"]});
export const childModules = Object.freeze({"asadabad":"./asadabad/asadabad.js","bahar":"./bahar/bahar.js","hamadan":"./hamadan/hamadan.js","kabudarahang":"./kabudarahang/kabudarahang.js","malayer":"./malayer/malayer.js","nahavand":"./nahavand/nahavand.js","tuyserkan":"./tuyserkan/tuyserkan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
