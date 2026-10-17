// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"deli-tua","repository":"asia","path":"indonesia/north-sumatra/deli-tua","depth":3,"parent":"indonesia/north-sumatra","children":["deli-tua-kampung"]});
export const childModules = Object.freeze({"deli-tua-kampung":"./deli-tua-kampung/deli-tua-kampung.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
