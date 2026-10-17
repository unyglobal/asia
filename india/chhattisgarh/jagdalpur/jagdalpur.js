// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jagdalpur","repository":"asia","path":"india/chhattisgarh/jagdalpur","depth":3,"parent":"india/chhattisgarh","children":["fraserpur"]});
export const childModules = Object.freeze({"fraserpur":"./fraserpur/fraserpur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
