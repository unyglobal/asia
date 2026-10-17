// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sikkim","repository":"asia","path":"india/sikkim","depth":2,"parent":"india","children":["gangtok"]});
export const childModules = Object.freeze({"gangtok":"./gangtok/gangtok.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
