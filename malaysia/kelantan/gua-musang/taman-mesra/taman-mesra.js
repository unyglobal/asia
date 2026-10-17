// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taman-mesra","repository":"asia","path":"malaysia/kelantan/gua-musang/taman-mesra","depth":4,"parent":"malaysia/kelantan/gua-musang","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
