// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-khor","repository":"asia","path":"qatar/al-khor","depth":2,"parent":"qatar","children":["al-khawr"]});
export const childModules = Object.freeze({"al-khawr":"./al-khawr/al-khawr.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
