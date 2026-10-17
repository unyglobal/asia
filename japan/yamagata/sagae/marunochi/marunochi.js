// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"marunochi","repository":"asia","path":"japan/yamagata/sagae/marunochi","depth":4,"parent":"japan/yamagata/sagae","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
