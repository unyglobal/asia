// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"long-bien","repository":"asia","path":"vietnam/hanoi/long-bien","depth":3,"parent":"vietnam/hanoi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
