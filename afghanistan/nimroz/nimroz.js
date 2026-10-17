// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nimroz","repository":"asia","path":"afghanistan/nimroz","depth":2,"parent":"afghanistan","children":["khash","zaranj"]});
export const childModules = Object.freeze({"khash":"./khash/khash.js","zaranj":"./zaranj/zaranj.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
