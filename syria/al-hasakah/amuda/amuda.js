// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amuda","repository":"asia","path":"syria/al-hasakah/amuda","depth":3,"parent":"syria/al-hasakah","children":["jawhariyah"]});
export const childModules = Object.freeze({"jawhariyah":"./jawhariyah/jawhariyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
