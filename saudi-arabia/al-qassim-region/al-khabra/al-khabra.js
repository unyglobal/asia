// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-khabra","repository":"asia","path":"saudi-arabia/al-qassim-region/al-khabra","depth":3,"parent":"saudi-arabia/al-qassim-region","children":["al-khabra-al-jadidah"]});
export const childModules = Object.freeze({"al-khabra-al-jadidah":"./al-khabra-al-jadidah/al-khabra-al-jadidah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
