// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mukhattat-sha-b-hasna","repository":"asia","path":"saudi-arabia/najran-region/najran/mukhattat-sha-b-hasna","depth":4,"parent":"saudi-arabia/najran-region/najran","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
