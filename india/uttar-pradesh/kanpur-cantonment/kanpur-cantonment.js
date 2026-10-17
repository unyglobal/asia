// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kanpur-cantonment","repository":"asia","path":"india/uttar-pradesh/kanpur-cantonment","depth":3,"parent":"india/uttar-pradesh","children":["sati-chaura"]});
export const childModules = Object.freeze({"sati-chaura":"./sati-chaura/sati-chaura.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
