// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-buraimi","repository":"asia","path":"oman/al-buraimi","depth":2,"parent":"oman","children":["al-buraymi"]});
export const childModules = Object.freeze({"al-buraymi":"./al-buraymi/al-buraymi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
