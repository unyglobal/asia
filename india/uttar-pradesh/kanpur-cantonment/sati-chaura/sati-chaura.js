// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sati-chaura","repository":"asia","path":"india/uttar-pradesh/kanpur-cantonment/sati-chaura","depth":4,"parent":"india/uttar-pradesh/kanpur-cantonment","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
