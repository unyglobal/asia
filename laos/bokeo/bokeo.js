// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bokeo","repository":"asia","path":"laos/bokeo","depth":2,"parent":"laos","children":["ban-houakhoua","ban-khoan"]});
export const childModules = Object.freeze({"ban-houakhoua":"./ban-houakhoua/ban-houakhoua.js","ban-khoan":"./ban-khoan/ban-khoan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
