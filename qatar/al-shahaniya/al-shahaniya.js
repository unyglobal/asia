// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-shahaniya","repository":"asia","path":"qatar/al-shahaniya","depth":2,"parent":"qatar","children":["umm-ghuwaylinah"]});
export const childModules = Object.freeze({"umm-ghuwaylinah":"./umm-ghuwaylinah/umm-ghuwaylinah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
