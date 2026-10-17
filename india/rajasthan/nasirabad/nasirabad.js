// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nasirabad","repository":"asia","path":"india/rajasthan/nasirabad","depth":3,"parent":"india/rajasthan","children":["sadr-bazar"]});
export const childModules = Object.freeze({"sadr-bazar":"./sadr-bazar/sadr-bazar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
