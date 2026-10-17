// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ballari","repository":"asia","path":"india/karnataka/ballari","depth":3,"parent":"india/karnataka","children":["brucepettah"]});
export const childModules = Object.freeze({"brucepettah":"./brucepettah/brucepettah.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
