// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sirvan","repository":"asia","path":"azerbaijan/shirvan/sirvan","depth":3,"parent":"azerbaijan/shirvan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
