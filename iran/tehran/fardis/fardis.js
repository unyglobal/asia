// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fardis","repository":"asia","path":"iran/tehran/fardis","depth":3,"parent":"iran/tehran","children":["kuy-e-laleh","shahrak-e-hefdah-e-shahrivar"]});
export const childModules = Object.freeze({"kuy-e-laleh":"./kuy-e-laleh/kuy-e-laleh.js","shahrak-e-hefdah-e-shahrivar":"./shahrak-e-hefdah-e-shahrivar/shahrak-e-hefdah-e-shahrivar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
