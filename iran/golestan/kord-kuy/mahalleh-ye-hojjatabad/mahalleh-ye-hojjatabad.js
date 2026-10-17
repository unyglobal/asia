// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mahalleh-ye-hojjatabad","repository":"asia","path":"iran/golestan/kord-kuy/mahalleh-ye-hojjatabad","depth":4,"parent":"iran/golestan/kord-kuy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
