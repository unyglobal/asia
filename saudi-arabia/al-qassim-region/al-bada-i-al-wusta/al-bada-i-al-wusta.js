// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-bada-i-al-wusta","repository":"asia","path":"saudi-arabia/al-qassim-region/al-bada-i-al-wusta","depth":3,"parent":"saudi-arabia/al-qassim-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
