// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minase","repository":"asia","path":"japan/osaka/minase","depth":3,"parent":"japan/osaka","children":["aoba","egawa","takahama"]});
export const childModules = Object.freeze({"aoba":"./aoba/aoba.js","egawa":"./egawa/egawa.js","takahama":"./takahama/takahama.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
