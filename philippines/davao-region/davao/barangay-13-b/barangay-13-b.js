// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"barangay-13-b","repository":"asia","path":"philippines/davao-region/davao/barangay-13-b","depth":4,"parent":"philippines/davao-region/davao","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
