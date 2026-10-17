// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shari-ali-abd-al-mughni","repository":"asia","path":"yemen/amanat-alasimah/sanaa/shari-ali-abd-al-mughni","depth":4,"parent":"yemen/amanat-alasimah/sanaa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
