// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-al-badiri","repository":"asia","path":"yemen/muhafazat-hadramaout/mukalla/hayy-al-badiri","depth":4,"parent":"yemen/muhafazat-hadramaout/mukalla","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
