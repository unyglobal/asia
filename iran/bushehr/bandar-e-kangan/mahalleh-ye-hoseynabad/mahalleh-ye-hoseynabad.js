// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-hoseynabad","repository":"asia","path":"iran/bushehr/bandar-e-kangan/mahalleh-ye-hoseynabad","depth":4,"parent":"iran/bushehr/bandar-e-kangan","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
