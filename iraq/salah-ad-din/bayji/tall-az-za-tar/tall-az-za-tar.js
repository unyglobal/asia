// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tall-az-za-tar","repository":"asia","path":"iraq/salah-ad-din/bayji/tall-az-za-tar","depth":4,"parent":"iraq/salah-ad-din/bayji","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
