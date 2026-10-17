// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"yanggu","repository":"asia","path":"south-korea/gangwon-do/yanggu","depth":3,"parent":"south-korea/gangwon-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
