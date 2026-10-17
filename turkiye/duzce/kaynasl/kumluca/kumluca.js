// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kumluca","repository":"asia","path":"turkiye/duzce/kaynasl/kumluca","depth":4,"parent":"turkiye/duzce/kaynasl","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
