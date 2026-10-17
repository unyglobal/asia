// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sadr-bazar","repository":"asia","path":"india/rajasthan/nasirabad/sadr-bazar","depth":4,"parent":"india/rajasthan/nasirabad","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
