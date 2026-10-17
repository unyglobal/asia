// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mandya","repository":"asia","path":"india/karnataka/mandya","depth":3,"parent":"india/karnataka","children":["halahalli","hosahalli"]});
export const childModules = Object.freeze({"halahalli":"./halahalli/halahalli.js","hosahalli":"./hosahalli/hosahalli.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
