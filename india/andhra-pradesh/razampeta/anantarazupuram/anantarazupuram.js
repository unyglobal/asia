// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anantarazupuram","repository":"asia","path":"india/andhra-pradesh/razampeta/anantarazupuram","depth":4,"parent":"india/andhra-pradesh/razampeta","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
