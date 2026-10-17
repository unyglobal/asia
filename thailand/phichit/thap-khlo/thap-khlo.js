// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thap-khlo","repository":"asia","path":"thailand/phichit/thap-khlo","depth":3,"parent":"thailand/phichit","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
