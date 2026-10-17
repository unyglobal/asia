// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-sheykh-e-zangiha","repository":"asia","path":"iran/bushehr/bandar-e-deylam/mahalleh-ye-sheykh-e-zangiha","depth":4,"parent":"iran/bushehr/bandar-e-deylam","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
