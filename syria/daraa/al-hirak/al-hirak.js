// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-hirak","repository":"asia","path":"syria/daraa/al-hirak","depth":3,"parent":"syria/daraa","children":["al-hufrah"]});
export const childModules = Object.freeze({"al-hufrah":"./al-hufrah/al-hufrah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
