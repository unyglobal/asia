// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mianzhu-deyang-sichuan","repository":"asia","path":"china/sichuan/mianzhu-deyang-sichuan","depth":3,"parent":"china/sichuan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
