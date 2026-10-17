// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elazig","repository":"asia","path":"turkiye/elazig","depth":2,"parent":"turkiye","children":["baskil","elaz-g","karakocan","kovanc-lar"]});
export const childModules = Object.freeze({"baskil":"./baskil/baskil.js","elaz-g":"./elaz-g/elaz-g.js","karakocan":"./karakocan/karakocan.js","kovanc-lar":"./kovanc-lar/kovanc-lar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
