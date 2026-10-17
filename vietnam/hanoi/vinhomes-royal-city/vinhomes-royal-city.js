// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vinhomes-royal-city","repository":"asia","path":"vietnam/hanoi/vinhomes-royal-city","depth":3,"parent":"vietnam/hanoi","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
