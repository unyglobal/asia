// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"shirvan","repository":"asia","path":"azerbaijan/shirvan","depth":2,"parent":"azerbaijan","children":["sirvan"]});
export const childModules = Object.freeze({"sirvan":"./sirvan/sirvan.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
