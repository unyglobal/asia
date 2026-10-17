// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"raigarh","repository":"asia","path":"india/chhattisgarh/raigarh","depth":3,"parent":"india/chhattisgarh","children":["gangarampur"]});
export const childModules = Object.freeze({"gangarampur":"./gangarampur/gangarampur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
