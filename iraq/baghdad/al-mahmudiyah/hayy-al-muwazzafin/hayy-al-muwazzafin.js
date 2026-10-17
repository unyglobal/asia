// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-al-muwazzafin","repository":"asia","path":"iraq/baghdad/al-mahmudiyah/hayy-al-muwazzafin","depth":4,"parent":"iraq/baghdad/al-mahmudiyah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
