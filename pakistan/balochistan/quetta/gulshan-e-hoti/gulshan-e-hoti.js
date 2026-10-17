// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gulshan-e-hoti","repository":"asia","path":"pakistan/balochistan/quetta/gulshan-e-hoti","depth":4,"parent":"pakistan/balochistan/quetta","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
