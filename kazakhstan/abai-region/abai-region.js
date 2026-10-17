// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"abai-region","repository":"asia","path":"kazakhstan/abai-region","depth":2,"parent":"kazakhstan","children":["ayagoz","kalbatau","maqanshy","semey"]});
export const childModules = Object.freeze({"ayagoz":"./ayagoz/ayagoz.js","kalbatau":"./kalbatau/kalbatau.js","maqanshy":"./maqanshy/maqanshy.js","semey":"./semey/semey.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
