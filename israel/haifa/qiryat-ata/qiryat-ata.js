// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qiryat-ata","repository":"asia","path":"israel/haifa/qiryat-ata","depth":3,"parent":"israel/haifa","children":["kfar-ata"]});
export const childModules = Object.freeze({"kfar-ata":"./kfar-ata/kfar-ata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
