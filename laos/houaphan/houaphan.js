// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"houaphan","repository":"asia","path":"laos/houaphan","depth":2,"parent":"laos","children":["xam-nua"]});
export const childModules = Object.freeze({"xam-nua":"./xam-nua/xam-nua.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
