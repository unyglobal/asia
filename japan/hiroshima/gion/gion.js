// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gion","repository":"asia","path":"japan/hiroshima/gion","depth":3,"parent":"japan/hiroshima","children":["nagatsuka"]});
export const childModules = Object.freeze({"nagatsuka":"./nagatsuka/nagatsuka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
