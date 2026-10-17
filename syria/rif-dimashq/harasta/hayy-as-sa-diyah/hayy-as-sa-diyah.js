// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-as-sa-diyah","repository":"asia","path":"syria/rif-dimashq/harasta/hayy-as-sa-diyah","depth":4,"parent":"syria/rif-dimashq/harasta","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
