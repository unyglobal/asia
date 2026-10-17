// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sabzabad","repository":"asia","path":"iran/khuzestan/masjed-soleyman/sabzabad","depth":4,"parent":"iran/khuzestan/masjed-soleyman","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
