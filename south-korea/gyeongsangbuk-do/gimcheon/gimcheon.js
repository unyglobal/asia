// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gimcheon","repository":"asia","path":"south-korea/gyeongsangbuk-do/gimcheon","depth":3,"parent":"south-korea/gyeongsangbuk-do","children":["p-yonghwa-dong","songnam-dong","yongam-dong"]});
export const childModules = Object.freeze({"p-yonghwa-dong":"./p-yonghwa-dong/p-yonghwa-dong.js","songnam-dong":"./songnam-dong/songnam-dong.js","yongam-dong":"./yongam-dong/yongam-dong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
