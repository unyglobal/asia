// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"onomichi","repository":"asia","path":"japan/hiroshima/onomichi","depth":3,"parent":"japan/hiroshima","children":["kubo"]});
export const childModules = Object.freeze({"kubo":"./kubo/kubo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
