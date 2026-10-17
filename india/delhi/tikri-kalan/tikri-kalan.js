// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tikri-kalan","repository":"asia","path":"india/delhi/tikri-kalan","depth":3,"parent":"india/delhi","children":["baba-haridasnagar"]});
export const childModules = Object.freeze({"baba-haridasnagar":"./baba-haridasnagar/baba-haridasnagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
