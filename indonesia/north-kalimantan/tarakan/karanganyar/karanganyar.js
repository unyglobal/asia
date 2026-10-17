// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karanganyar","repository":"asia","path":"indonesia/north-kalimantan/tarakan/karanganyar","depth":4,"parent":"indonesia/north-kalimantan/tarakan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
