// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"civilian-district","repository":"asia","path":"iraq/anbar/al-fallujah/civilian-district","depth":4,"parent":"iraq/anbar/al-fallujah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
