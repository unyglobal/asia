// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"qishlaq-e-tapah-ye-band-e-barq","repository":"asia","path":"afghanistan/baghlan/pul-e-khumri/qishlaq-e-tapah-ye-band-e-barq","depth":4,"parent":"afghanistan/baghlan/pul-e-khumri","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
