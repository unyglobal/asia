// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kut-e-abdollah","repository":"asia","path":"iran/khuzestan/kut-e-abdollah","depth":3,"parent":"iran/khuzestan","children":["kuy-e-shari-ati"]});
export const childModules = Object.freeze({"kuy-e-shari-ati":"./kuy-e-shari-ati/kuy-e-shari-ati.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
