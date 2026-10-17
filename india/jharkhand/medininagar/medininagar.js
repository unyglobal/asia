// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"medininagar","repository":"asia","path":"india/jharkhand/medininagar","depth":3,"parent":"india/jharkhand","children":["abatganj","chamartola","hamidganj","kasaitola","thana"]});
export const childModules = Object.freeze({"abatganj":"./abatganj/abatganj.js","chamartola":"./chamartola/chamartola.js","hamidganj":"./hamidganj/hamidganj.js","kasaitola":"./kasaitola/kasaitola.js","thana":"./thana/thana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
