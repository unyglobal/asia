// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mersing","repository":"asia","path":"malaysia/johor/mersing","depth":3,"parent":"malaysia/johor","children":["kampung-bahagia"]});
export const childModules = Object.freeze({"kampung-bahagia":"./kampung-bahagia/kampung-bahagia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
