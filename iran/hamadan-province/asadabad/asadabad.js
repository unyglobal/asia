// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asadabad","repository":"asia","path":"iran/hamadan-province/asadabad","depth":3,"parent":"iran/hamadan-province","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
