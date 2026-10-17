// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"golestan-e-shohada","repository":"asia","path":"iran/south-khorasan-province/boshruyeh/golestan-e-shohada","depth":4,"parent":"iran/south-khorasan-province/boshruyeh","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
