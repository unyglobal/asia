// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tay-ho","repository":"asia","path":"vietnam/hanoi/tay-ho","depth":3,"parent":"vietnam/hanoi","children":["ciputra"]});
export const childModules = Object.freeze({"ciputra":"./ciputra/ciputra.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
