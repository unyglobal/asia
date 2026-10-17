// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qarn-al-jariyah","repository":"asia","path":"oman/ad-dakhiliyah/sama-il/qarn-al-jariyah","depth":4,"parent":"oman/ad-dakhiliyah/sama-il","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
