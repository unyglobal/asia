// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-al-jumhuriyah","repository":"asia","path":"iraq/al-qadisiyah/al-diwaniyah/hayy-al-jumhuriyah","depth":4,"parent":"iraq/al-qadisiyah/al-diwaniyah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
