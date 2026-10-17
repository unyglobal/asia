// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"musan-up","repository":"asia","path":"north-korea/north-hamgyong/musan-up","depth":3,"parent":"north-korea/north-hamgyong","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
