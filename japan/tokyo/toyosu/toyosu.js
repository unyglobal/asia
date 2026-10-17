// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"toyosu","repository":"asia","path":"japan/tokyo/toyosu","depth":3,"parent":"japan/tokyo","children":["fukagawa-hamazonocho","tsukishima-higashi-gashidori","tsukishima-higashi-nakadori","tsukishima-nishi-gashidori","tsukishima-nishi-nakadori","tsukishimadori"]});
export const childModules = Object.freeze({"fukagawa-hamazonocho":"./fukagawa-hamazonocho/fukagawa-hamazonocho.js","tsukishima-higashi-gashidori":"./tsukishima-higashi-gashidori/tsukishima-higashi-gashidori.js","tsukishima-higashi-nakadori":"./tsukishima-higashi-nakadori/tsukishima-higashi-nakadori.js","tsukishima-nishi-gashidori":"./tsukishima-nishi-gashidori/tsukishima-nishi-gashidori.js","tsukishima-nishi-nakadori":"./tsukishima-nishi-nakadori/tsukishima-nishi-nakadori.js","tsukishimadori":"./tsukishimadori/tsukishimadori.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
