// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"omidiyeh","repository":"asia","path":"iran/khuzestan/omidiyeh","depth":3,"parent":"iran/khuzestan","children":["kuy-e-niru","omidiyeh-ye-sofla","shahrak-motahhari"]});
export const childModules = Object.freeze({"kuy-e-niru":"./kuy-e-niru/kuy-e-niru.js","omidiyeh-ye-sofla":"./omidiyeh-ye-sofla/omidiyeh-ye-sofla.js","shahrak-motahhari":"./shahrak-motahhari/shahrak-motahhari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
