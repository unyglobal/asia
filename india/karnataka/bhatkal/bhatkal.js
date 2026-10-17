// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bhatkal","repository":"asia","path":"india/karnataka/bhatkal","depth":3,"parent":"india/karnataka","children":["mankulker"]});
export const childModules = Object.freeze({"mankulker":"./mankulker/mankulker.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
