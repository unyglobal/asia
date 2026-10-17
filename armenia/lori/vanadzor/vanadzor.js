// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vanadzor","repository":"asia","path":"armenia/lori/vanadzor","depth":3,"parent":"armenia/lori","children":["kentron"]});
export const childModules = Object.freeze({"kentron":"./kentron/kentron.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
