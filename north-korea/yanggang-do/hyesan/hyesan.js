// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hyesan","repository":"asia","path":"north-korea/yanggang-do/hyesan","depth":3,"parent":"north-korea/yanggang-do","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
