// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"jaramana","repository":"asia","path":"syria/rif-dimashq/jaramana","depth":3,"parent":"syria/rif-dimashq","children":["al-kawkashiyah","al-mazar","hawsh-al-qadam"]});
export const childModules = Object.freeze({"al-kawkashiyah":"./al-kawkashiyah/al-kawkashiyah.js","al-mazar":"./al-mazar/al-mazar.js","hawsh-al-qadam":"./hawsh-al-qadam/hawsh-al-qadam.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
