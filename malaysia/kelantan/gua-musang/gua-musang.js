// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gua-musang","repository":"asia","path":"malaysia/kelantan/gua-musang","depth":3,"parent":"malaysia/kelantan","children":["taman-mesra"]});
export const childModules = Object.freeze({"taman-mesra":"./taman-mesra/taman-mesra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
