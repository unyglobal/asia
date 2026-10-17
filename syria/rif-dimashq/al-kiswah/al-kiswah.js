// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"al-kiswah","repository":"asia","path":"syria/rif-dimashq/al-kiswah","depth":3,"parent":"syria/rif-dimashq","children":["al-bayadir"]});
export const childModules = Object.freeze({"al-bayadir":"./al-bayadir/al-bayadir.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
