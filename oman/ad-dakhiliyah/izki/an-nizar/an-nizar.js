// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"an-nizar","repository":"asia","path":"oman/ad-dakhiliyah/izki/an-nizar","depth":4,"parent":"oman/ad-dakhiliyah/izki","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
