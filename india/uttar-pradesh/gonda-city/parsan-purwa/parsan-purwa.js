// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"parsan-purwa","repository":"asia","path":"india/uttar-pradesh/gonda-city/parsan-purwa","depth":4,"parent":"india/uttar-pradesh/gonda-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
