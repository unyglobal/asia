// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bandar-e-deylam","repository":"asia","path":"iran/bushehr/bandar-e-deylam","depth":3,"parent":"iran/bushehr","children":["kuy-e-behbehaniha","mahalleh-ye-sheykh-e-zangiha"]});
export const childModules = Object.freeze({"kuy-e-behbehaniha":"./kuy-e-behbehaniha/kuy-e-behbehaniha.js","mahalleh-ye-sheykh-e-zangiha":"./mahalleh-ye-sheykh-e-zangiha/mahalleh-ye-sheykh-e-zangiha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
