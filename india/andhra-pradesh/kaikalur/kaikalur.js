// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaikalur","repository":"asia","path":"india/andhra-pradesh/kaikalur","depth":3,"parent":"india/andhra-pradesh","children":["kottapeta"]});
export const childModules = Object.freeze({"kottapeta":"./kottapeta/kottapeta.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
