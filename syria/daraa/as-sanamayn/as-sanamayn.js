// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"as-sanamayn","repository":"asia","path":"syria/daraa/as-sanamayn","depth":3,"parent":"syria/daraa","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
