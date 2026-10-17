// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"subhashnagar","repository":"asia","path":"india/uttar-pradesh/ghaziabad/subhashnagar","depth":4,"parent":"india/uttar-pradesh/ghaziabad","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
