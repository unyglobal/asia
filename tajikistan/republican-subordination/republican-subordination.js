// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"republican-subordination","repository":"asia","path":"tajikistan/republican-subordination","depth":2,"parent":"tajikistan","children":["hisor","tursunzoda","vahdat"]});
export const childModules = Object.freeze({"hisor":"./hisor/hisor.js","tursunzoda":"./tursunzoda/tursunzoda.js","vahdat":"./vahdat/vahdat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
