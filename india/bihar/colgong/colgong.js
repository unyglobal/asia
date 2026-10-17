// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"colgong","repository":"asia","path":"india/bihar/colgong","depth":3,"parent":"india/bihar","children":["ghazipur"]});
export const childModules = Object.freeze({"ghazipur":"./ghazipur/ghazipur.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
