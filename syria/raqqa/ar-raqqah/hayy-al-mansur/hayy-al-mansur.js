// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-al-mansur","repository":"asia","path":"syria/raqqa/ar-raqqah/hayy-al-mansur","depth":4,"parent":"syria/raqqa/ar-raqqah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
