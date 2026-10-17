// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khurmuj","repository":"asia","path":"iran/bushehr/khurmuj","depth":3,"parent":"iran/bushehr","children":["mahalleh-ye-dashtiha","shahrak-e-pasdaran"]});
export const childModules = Object.freeze({"mahalleh-ye-dashtiha":"./mahalleh-ye-dashtiha/mahalleh-ye-dashtiha.js","shahrak-e-pasdaran":"./shahrak-e-pasdaran/shahrak-e-pasdaran.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
