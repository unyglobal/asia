// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-bahah-region","repository":"asia","path":"saudi-arabia/al-bahah-region","depth":2,"parent":"saudi-arabia","children":["al-bahah","baljurashi"]});
export const childModules = Object.freeze({"al-bahah":"./al-bahah/al-bahah.js","baljurashi":"./baljurashi/baljurashi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
