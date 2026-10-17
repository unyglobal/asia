// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dhofar","repository":"asia","path":"oman/dhofar","depth":2,"parent":"oman","children":["salalah"]});
export const childModules = Object.freeze({"salalah":"./salalah/salalah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
