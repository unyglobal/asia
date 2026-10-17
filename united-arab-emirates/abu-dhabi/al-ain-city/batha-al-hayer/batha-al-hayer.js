// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"batha-al-hayer","repository":"asia","path":"united-arab-emirates/abu-dhabi/al-ain-city/batha-al-hayer","depth":4,"parent":"united-arab-emirates/abu-dhabi/al-ain-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
