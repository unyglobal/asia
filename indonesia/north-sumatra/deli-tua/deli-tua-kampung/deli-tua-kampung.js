// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deli-tua-kampung","repository":"asia","path":"indonesia/north-sumatra/deli-tua/deli-tua-kampung","depth":4,"parent":"indonesia/north-sumatra/deli-tua","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
