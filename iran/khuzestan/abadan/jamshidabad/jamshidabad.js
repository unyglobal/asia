// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jamshidabad","repository":"asia","path":"iran/khuzestan/abadan/jamshidabad","depth":4,"parent":"iran/khuzestan/abadan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
