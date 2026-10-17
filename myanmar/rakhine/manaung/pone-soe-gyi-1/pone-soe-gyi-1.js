// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pone-soe-gyi-1","repository":"asia","path":"myanmar/rakhine/manaung/pone-soe-gyi-1","depth":4,"parent":"myanmar/rakhine/manaung","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
