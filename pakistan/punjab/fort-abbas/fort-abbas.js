// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fort-abbas","repository":"asia","path":"pakistan/punjab/fort-abbas","depth":3,"parent":"pakistan/punjab","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
