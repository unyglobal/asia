// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bacolod","repository":"asia","path":"philippines/bicol-region/irosin/bacolod","depth":4,"parent":"philippines/bicol-region/irosin","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
