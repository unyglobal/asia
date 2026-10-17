// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ar-rifa-ash-shamali","repository":"asia","path":"bahrain/southern-governorate/ar-rifa/ar-rifa-ash-shamali","depth":4,"parent":"bahrain/southern-governorate/ar-rifa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
