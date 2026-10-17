// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sing-buri","repository":"asia","path":"thailand/sing-buri","depth":2,"parent":"thailand","children":["bang-racham"]});
export const childModules = Object.freeze({"bang-racham":"./bang-racham/bang-racham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
