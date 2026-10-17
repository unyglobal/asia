// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"binnish","repository":"asia","path":"syria/idlib/binnish","depth":3,"parent":"syria/idlib","children":["al-masitah"]});
export const childModules = Object.freeze({"al-masitah":"./al-masitah/al-masitah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
