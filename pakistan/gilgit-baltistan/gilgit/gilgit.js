// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gilgit","repository":"asia","path":"pakistan/gilgit-baltistan/gilgit","depth":3,"parent":"pakistan/gilgit-baltistan","children":["barmas","nagril-bala"]});
export const childModules = Object.freeze({"barmas":"./barmas/barmas.js","nagril-bala":"./nagril-bala/nagril-bala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
