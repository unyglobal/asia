// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bonab","repository":"asia","path":"iran/east-azerbaijan/bonab","depth":3,"parent":"iran/east-azerbaijan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
