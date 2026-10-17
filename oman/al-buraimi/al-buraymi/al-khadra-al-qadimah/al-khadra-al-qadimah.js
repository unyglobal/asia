// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-khadra-al-qadimah","repository":"asia","path":"oman/al-buraimi/al-buraymi/al-khadra-al-qadimah","depth":4,"parent":"oman/al-buraimi/al-buraymi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
