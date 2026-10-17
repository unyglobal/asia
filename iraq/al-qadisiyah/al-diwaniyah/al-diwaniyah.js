// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-diwaniyah","repository":"asia","path":"iraq/al-qadisiyah/al-diwaniyah","depth":3,"parent":"iraq/al-qadisiyah","children":["hayy-al-jumhuriyah"]});
export const childModules = Object.freeze({"hayy-al-jumhuriyah":"./hayy-al-jumhuriyah/hayy-al-jumhuriyah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
