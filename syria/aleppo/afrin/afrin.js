// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"afrin","repository":"asia","path":"syria/aleppo/afrin","depth":3,"parent":"syria/aleppo","children":["al-ashrafiyah"]});
export const childModules = Object.freeze({"al-ashrafiyah":"./al-ashrafiyah/al-ashrafiyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
