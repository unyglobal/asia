// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qasameh-kari","repository":"asia","path":"iran/gilan-province/hashtpar/qasameh-kari","depth":4,"parent":"iran/gilan-province/hashtpar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
