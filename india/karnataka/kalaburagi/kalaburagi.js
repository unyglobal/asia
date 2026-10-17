// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalaburagi","repository":"asia","path":"india/karnataka/kalaburagi","depth":3,"parent":"india/karnataka","children":["badepur","ghazipur","jagat"]});
export const childModules = Object.freeze({"badepur":"./badepur/badepur.js","ghazipur":"./ghazipur/ghazipur.js","jagat":"./jagat/jagat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
