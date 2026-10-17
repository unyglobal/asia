// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hayy-masakin-al-mu-allimin","repository":"asia","path":"syria/homs/al-qusayr/hayy-masakin-al-mu-allimin","depth":4,"parent":"syria/homs/al-qusayr","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
