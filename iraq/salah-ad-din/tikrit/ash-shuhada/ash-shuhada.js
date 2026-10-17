// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ash-shuhada","repository":"asia","path":"iraq/salah-ad-din/tikrit/ash-shuhada","depth":4,"parent":"iraq/salah-ad-din/tikrit","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
