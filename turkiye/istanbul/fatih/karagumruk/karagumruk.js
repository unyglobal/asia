// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karagumruk","repository":"asia","path":"turkiye/istanbul/fatih/karagumruk","depth":4,"parent":"turkiye/istanbul/fatih","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
