// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hazaribagh","repository":"asia","path":"india/jharkhand/hazaribagh","depth":3,"parent":"india/jharkhand","children":["kacheri","nawada"]});
export const childModules = Object.freeze({"kacheri":"./kacheri/kacheri.js","nawada":"./nawada/nawada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
