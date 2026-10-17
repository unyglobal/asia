// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hawsh-al-qadam","repository":"asia","path":"syria/rif-dimashq/jaramana/hawsh-al-qadam","depth":4,"parent":"syria/rif-dimashq/jaramana","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
