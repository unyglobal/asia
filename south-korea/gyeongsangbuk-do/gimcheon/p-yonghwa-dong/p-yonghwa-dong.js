// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"p-yonghwa-dong","repository":"asia","path":"south-korea/gyeongsangbuk-do/gimcheon/p-yonghwa-dong","depth":4,"parent":"south-korea/gyeongsangbuk-do/gimcheon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
