// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manaung","repository":"asia","path":"myanmar/rakhine/manaung","depth":3,"parent":"myanmar/rakhine","children":["pone-soe-gyi-1"]});
export const childModules = Object.freeze({"pone-soe-gyi-1":"./pone-soe-gyi-1/pone-soe-gyi-1.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
