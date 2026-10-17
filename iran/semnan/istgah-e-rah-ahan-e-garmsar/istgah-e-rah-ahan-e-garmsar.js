// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"istgah-e-rah-ahan-e-garmsar","repository":"asia","path":"iran/semnan/istgah-e-rah-ahan-e-garmsar","depth":3,"parent":"iran/semnan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
