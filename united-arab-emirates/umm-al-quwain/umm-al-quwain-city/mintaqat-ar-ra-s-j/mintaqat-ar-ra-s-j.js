// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mintaqat-ar-ra-s-j","repository":"asia","path":"united-arab-emirates/umm-al-quwain/umm-al-quwain-city/mintaqat-ar-ra-s-j","depth":4,"parent":"united-arab-emirates/umm-al-quwain/umm-al-quwain-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
