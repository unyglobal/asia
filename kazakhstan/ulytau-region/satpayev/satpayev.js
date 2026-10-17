// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"satpayev","repository":"asia","path":"kazakhstan/ulytau-region/satpayev","depth":3,"parent":"kazakhstan/ulytau-region","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
