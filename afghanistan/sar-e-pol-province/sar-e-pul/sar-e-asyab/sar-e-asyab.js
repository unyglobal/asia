// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sar-e-asyab","repository":"asia","path":"afghanistan/sar-e-pol-province/sar-e-pul/sar-e-asyab","depth":4,"parent":"afghanistan/sar-e-pol-province/sar-e-pul","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
