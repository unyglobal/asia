// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"boshruyeh","repository":"asia","path":"iran/south-khorasan-province/boshruyeh","depth":3,"parent":"iran/south-khorasan-province","children":["golestan-e-shohada"]});
export const childModules = Object.freeze({"golestan-e-shohada":"./golestan-e-shohada/golestan-e-shohada.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
