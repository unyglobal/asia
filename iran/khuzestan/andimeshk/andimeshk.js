// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"andimeshk","repository":"asia","path":"iran/khuzestan/andimeshk","depth":3,"parent":"iran/khuzestan","children":["kuy-e-shahid"]});
export const childModules = Object.freeze({"kuy-e-shahid":"./kuy-e-shahid/kuy-e-shahid.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
