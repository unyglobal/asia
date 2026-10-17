// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khao-san","repository":"asia","path":"thailand/bangkok/phra-nakhon/khao-san","depth":4,"parent":"thailand/bangkok/phra-nakhon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
