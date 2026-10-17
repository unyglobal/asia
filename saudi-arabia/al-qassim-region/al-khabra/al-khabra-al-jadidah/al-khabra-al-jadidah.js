// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-khabra-al-jadidah","repository":"asia","path":"saudi-arabia/al-qassim-region/al-khabra/al-khabra-al-jadidah","depth":4,"parent":"saudi-arabia/al-qassim-region/al-khabra","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
