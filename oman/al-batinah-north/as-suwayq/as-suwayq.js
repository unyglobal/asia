// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-suwayq","repository":"asia","path":"oman/al-batinah-north/as-suwayq","depth":3,"parent":"oman/al-batinah-north","children":["al-hillah-al-qadimah","ash-shuraysah"]});
export const childModules = Object.freeze({"al-hillah-al-qadimah":"./al-hillah-al-qadimah/al-hillah-al-qadimah.js","ash-shuraysah":"./ash-shuraysah/ash-shuraysah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
