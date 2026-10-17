// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karol-bagh","repository":"asia","path":"india/delhi/karol-bagh","depth":3,"parent":"india/delhi","children":["devnagar","krishnanagar"]});
export const childModules = Object.freeze({"devnagar":"./devnagar/devnagar.js","krishnanagar":"./krishnanagar/krishnanagar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
