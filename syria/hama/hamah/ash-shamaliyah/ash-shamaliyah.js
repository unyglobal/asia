// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ash-shamaliyah","repository":"asia","path":"syria/hama/hamah/ash-shamaliyah","depth":4,"parent":"syria/hama/hamah","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
