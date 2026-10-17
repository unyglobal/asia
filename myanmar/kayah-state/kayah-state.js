// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kayah-state","repository":"asia","path":"myanmar/kayah-state","depth":2,"parent":"myanmar","children":["loikaw"]});
export const childModules = Object.freeze({"loikaw":"./loikaw/loikaw.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
