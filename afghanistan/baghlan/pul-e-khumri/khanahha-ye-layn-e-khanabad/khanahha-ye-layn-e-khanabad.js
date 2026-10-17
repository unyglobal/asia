// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khanahha-ye-layn-e-khanabad","repository":"asia","path":"afghanistan/baghlan/pul-e-khumri/khanahha-ye-layn-e-khanabad","depth":4,"parent":"afghanistan/baghlan/pul-e-khumri","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
