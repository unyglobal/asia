// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cox-s-bazar","repository":"asia","path":"bangladesh/chittagong/cox-s-bazar","depth":3,"parent":"bangladesh/chittagong","children":["konarpara"]});
export const childModules = Object.freeze({"konarpara":"./konarpara/konarpara.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
