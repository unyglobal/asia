// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tanba","repository":"asia","path":"japan/hyogo/tanba","depth":3,"parent":"japan/hyogo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
